import test from 'ava'
import { mediaUrlParser } from './index.js'
import {
    youtubeDict,
    fileDict
} from './tests/provider-dictionaries'

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
