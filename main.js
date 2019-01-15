import youtubeRegex from 'youtube-regex'
import providersList from './src/providers'

/*
	Media provider URL parsers
*/

const parseFileUrl = (url) => {
	let result = new URL(url)
	let s = result.pathname.split('/')
	let id = s[s.length - 1]
	return {
		id,
		type: 'audio'
	}
}

const parseYoutubeUrl = (url) => {
	const results = youtubeRegex().exec(url)
	if (!results) {
		return false
	}
	const id = results[1];
	return {
		id,
		type: 'video'
	}
}

const parseDiscogsUrl = (url) => {
  // https://regexr.com/3i5fa
  let discogsReleaseRegex = /([0-9]+(?:$|(?=\?)|(?=\/$)))/gm
  let result = discogsReleaseRegex.exec(url)
  if (!result) {
		throw new Error('Could not find id from Discogs URL')
  }
  return {
		id: result[0],
		type: 'release'
	}
}

const parseBandcampUrl = (url) => {
	// https://regexr.com/46f84
	let bandcampRegex = /(album|track)(?:\/)([^\/\s\?]+)/gm
  let result = bandcampRegex.exec(url)
  if (!result) {
		throw new Error('Could not find informations from Bandcamp URL')
  }
  return {
		type: result[1],
		id: result[2]
	}
}

const parseUrl = (url) => {
	let provider = findProvider(url)
  let methods = {
		youtube: (url) => parseYoutubeUrl(url),
		file: (url) => parseFileUrl(url),
		discogs: (url) => parseDiscogsUrl(url),
		bandcamp: (url) => parseBandcampUrl(url)
  }
	let providerUrlParser = methods[provider]

	if (typeof providerUrlParser !== 'function') {
		throw new Error(`Could not find a url parser for the provider: ${provider}, with url: ${url}`)
	}

	const {id, type} = providerUrlParser(url)
	return {
		id,
		type,
		provider
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

	// Parse the media provider url, to find: provider id, media id, media type
	let {provider, id, type} = parseUrl(url)

	if (!id) {
		throw new Error('Could not detect id from: ' + url)
	}

	// 4. return a result object
	return { url, provider, id, type }
}

export {
	mediaUrlParser
}
