import test from 'ava'
import {mediaUrlParser} from './index.js'
import {youtubeDict, fileDict, discogsDict, bandcampDict} from './tests/provider-dictionaries'

/*
  Providers, check if they are correctly discovered in a url
*/

test('It throws when it cannot detect a provider', t => {
	const error = t.throws(() => {
		mediaUrlParser('notanurl')
	})
})

test('Youtube URL correctly parses the provider', t => {
	t.plan(youtubeDict.length)

	youtubeDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.provider, 'youtube')
	})
})

test('Object returned includes a normalized url property', t => {
	youtubeDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.truthy(typeof r.url, 'string')
		t.is(r.url.includes(item[0]), true)
	})
})

test('File URL correctly parses the provider', async t => {
	t.plan(fileDict.length)

	fileDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.provider, 'file')
	})
})

test('Discogs URL correctly parses the provider', async t => {
	t.plan(discogsDict.length)

	discogsDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.provider, 'discogs')
	})
})

test('Bandcamp URL correctly parses the provider', async t => {
	t.plan(bandcampDict.length)

	bandcampDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.provider, 'bandcamp')
	})
})

/*
  ID, check if the if is found in a url of a specific provider
*/

test('Youtube URL correctly parses the id', t => {
	t.plan(youtubeDict.length)

	youtubeDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.id, item[1])
	})
})

test('File URL correctly parses the id', t => {
	t.plan(fileDict.length)

	fileDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.id, item[1])
	})
})

test('Discogs URL correctly parses the id', t => {
	t.plan(discogsDict.length)

	discogsDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.id, item[1])
	})
})

test('Bandcamp URL correctly parses the id ', t => {
	t.plan(bandcampDict.length)

	bandcampDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.id, item[1])
	})
})

/*
  Type, check if the type is found in a url of a specific provider
*/

test('Bandcamp URL correctly parses the media type', async t => {
	t.plan(bandcampDict.length)

	bandcampDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.type, item[2])
	})
})
