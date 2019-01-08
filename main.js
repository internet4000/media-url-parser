import youtubeRegex from 'youtube-regex'
import providersList from './src/providers'

const youtubeUrlToId = (url) => {
	const results = youtubeRegex().exec(url)
	if (!results) {
		return false
	}
	return results[1]
}

const fileUrlToId = (url) => {
	let result = new URL(url)
	let s = result.pathname.split('/')
	return s[s.length - 1]
}

const discogsUrlToId = (url) => {
  // https://regexr.com/3i5fa
  let discogsReleaseRegex = /([0-9]+(?:$|(?=\?)|(?=\/$)))/gm
  let result = discogsReleaseRegex.exec(url)
  if (!result) {
		throw new Error('Could not find id from Discogs URL')
  }
  return result[0]
}

const findId = (url, provider) => {
  let methods = {
		youtube: (url) => youtubeUrlToId(url),
		file: (url) => fileUrlToId(url),
		discogs: (url) => discogsUrlToId(url)
  }
	let extractId = methods[provider]
	if (typeof extractId !== 'function') {
		throw new Error('Could not find provider method from: ' + extractId)
	} else {
		return extractId(url)
	}
}

const findProvider = (url) => {
	let hostId = extractHostId(new URL(url).host)

	// from the hostId, find the provider id
	// and fallback to file.
	return providersList[hostId] || 'file'
}

const extractHostId = (host) => {
	let els = host.split('.')

	// If it's an IP address, host should be undefined.
	if (Number(els.join(''))) {
		return undefined
	}

	// else return the two last elements of the array,
	// the top domain name and its extension
	return els
		.slice(els.length - 2, els.length)
		.join('.')
}

// enforces the presence of a `host` in the url
const normalizeUrl = (url) => {
	if (!url.startsWith('http')) {
		url = `https://${url}`
	}
	return url
}

const mediaUrlParser = (inputUrl) => {
	// 0. normalize url, so it can be parsed homogenously
	const url = normalizeUrl(inputUrl)

	// 1. detect which provider's url it is
	let provider = findProvider(url)

	// 2. in this provider url, find a media `id`
	let id = findId(url, provider)

	if (!id) {
		throw new Error('Could not detect id from: ' + url)
	}

	// 3. return a result object
	return { url, provider, id }
}

export {
	mediaUrlParser
}
