import URL from 'url'
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
	let result = URL.parse(url)
	let s = result.pathname.split('/')
	return s[s.length - 1]
}

const findId = (url, provider) => {
	let methods = {
		youtube: (url) => youtubeUrlToId(url),
		file: (url) => fileUrlToId(url)
	}

	let extractId = methods[provider]
	if (typeof extractId !== 'function') {
		return undefined
	} else {
		return extractId(url)
	}
}

const findProvider = (url) => {
	let result = URL.parse(url)
	let hostId = extractHostId(result.host)

	// from the hostId, find the provider id
	return providersList[hostId] || 'file'
}

const extractHostId = (host) => {
	let els = host.split('.')
	// is host an ip, aka just numbers
	if (Number(els.join(''))) {
		return undefined
	}
	// else return the two last elements of the array,
	// the top domain name and its extension
	return els
		.slice(els.length -2, els.length)
		.join('.')
}

// enforces the presence of a `host` in the url
const normalizeUrl = (url) => {
	let result = URL.parse(url)
	// case there is no `http://` in the url
	if (!result.hostname) {
		// default to https
		return `https://${url}`
	} else {
		return url
	}
}

const mediaUrlParser = (url) => {
	// 0. normalize url, so it can be parsed homogenously
	url = normalizeUrl(url)

	// 1. detect which provider's url it is
	let provider = findProvider(url)

	// 2. in this provider url, find a media `id`
	let id = findId(url, provider)

	// 3. return a result object
	return { url, provider, id }
}

export {
	mediaUrlParser
}
