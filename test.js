import test from 'ava'
import { mediaUrlParser } from './index.js'
import {
    youtubeDict,
    fileDict,
    discogsDict
} from './tests/provider-dictionaries'


/*
  Providers, check if they are correctly discovered in a url
*/

test('Youtube URL correctly parse the provider', t => {
	t.plan(youtubeDict.length)

	youtubeDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.provider, 'youtube');
	})
});

test('File URL correctly parse the provider', async t => {
	t.plan(fileDict.length)

	fileDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.provider, 'file');
	})
});

test('Discogs URL correctly parse the provider', async t => {
    t.plan(discogsDict.length)

    discogsDict.forEach(item => {
	let r = mediaUrlParser(item[0])
	t.is(r.provider, 'discogs');
    })
});


/*
  ID, check if the if is found in a url of a specific provider
*/

test('Youtube URL correctly parse the id correctly', t => {
	t.plan(youtubeDict.length)

	youtubeDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.id, item[1]);
	})
});

test('File URL correctly parse the id correctly', t => {
	t.plan(fileDict.length)

	fileDict.forEach(item => {
		let r = mediaUrlParser(item[0])
		t.is(r.id, item[1]);
	})
});

test('It throws on invalid URL', t => {
	const error = t.throws(() => {
		mediaUrlParser('notanurl')
	})
});

test('Discogs URL correctly parse the id correctly', t => {
    t.plan(discogsDict.length)

    discogsDict.forEach(item => {
	let r = mediaUrlParser(item[0])
	t.is(r.id, item[1]);
    })
});
