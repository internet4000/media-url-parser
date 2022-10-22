import test from 'ava'

/* tests at the bottm */

// a dictionary here is an array of arrays
// const dictionnary = [ ['providerUrl', 'providerId']]
export const youtubeDict = [
	[
		'youtu.be/yhRdMTQWhOc',
		'yhRdMTQWhOc'
	],
	[
		'https://www.youtube.com/watch?v=OkR7UNnQU6c',
		'OkR7UNnQU6c'
	],
	[
		'https://www.youtube.com/watch?v=OkR7UNnQU6c',
		'OkR7UNnQU6c'
	],
	[
		'https://www.youtube.com/watch?t=30&v=nt4fMMCNdRk',
		'nt4fMMCNdRk'
	],
	[
		'https://www.youtube.com/watch?v=-RWl24TUW6g',
		'-RWl24TUW6g'
	],
	[
		'https://youtu.be/O5jUi3kBins',
		'O5jUi3kBins'
	],
	[
		'https://youtu.be/O5jUi3kBins?t=16s',
		'O5jUi3kBins'
	],
	[
		'https://youtu.be/-RWl24TUW6g',
		'-RWl24TUW6g'
	],
	[
		'https://www.youtube.com/embed/O5jUi3kBins?rel=0&amp;controls=0&amp;showinfo=0',
		'O5jUi3kBins'
	]
]

export const fileDict = [
	[
		'http://192.168.0.1/a/longer/path/podcast.ogg',
		'podcast.ogg'
	],
	[
		'https://upload.wikimedia.org/wikipedia/commons/7/7a/Neural-Correlates-of-Natural-Human-Echolocation-in-Early-and-Late-Blind-Echolocation-Experts-pone.0020162.s021.ogg',
		'Neural-Correlates-of-Natural-Human-Echolocation-in-Early-and-Late-Blind-Echolocation-Experts-pone.0020162.s021.ogg'
	],
	[
		'https://upload.wikimedia.org/wikipedia/commons/e/ef/Tittums.ogg',
		'Tittums.ogg'
	],
	[
		'https://upload.wikimedia.org/wikipedia/commons/5/53/Birds_Polyphonic.ogg',
		'Birds_Polyphonic.ogg'
	]
]


export const discogsDict = [
	[
		'https://7778787987987.discogs.com/1123123/release/082112312312331',
		'082112312312331'
	],
	[
		'https://7778787987987.discogs.com/1123123/release/082112312312331/',
		'082112312312331'
	],
	[
		'https://www.discogs.com/Various-Absolute-99333331999/release/1607906',
		'1607906'
	],
	[
		'https://www.discogs.com/Various-Absolute-99-The-Best-Of-1999/release/1607906',
		'1607906'
	],
	[
		'www.discogs.com/Various-Absolute-99-The-Best-Of-1999/release/1607906',
		'1607906'
	],
	[
		'https://www.discogs.com/Nu-Guinea-The-Tony-Allen-Experiments/release/7983975',
		'7983975'
	],
	[
		'https://www.discogs.com/Nu-Guinea-The-Tony-Allen-Experiments/master/945635',
		'945635'
	],
	[
		'https://www.discogs.com/Nu-Guinea-The-Tony-Allen-Experiments/release/7997305',
		'7997305'
	],
	[
		'https://www.discogs.com/sell/release/7983975?ev=rb',
		'7983975'
	],
	[
		'https://www.discogs.com/sell/release/7983975?offers=1&condition=Mint+%28M%29',
		'7983975'
	],
	[
		'https://www.discogs.com/sell/release/7983975?currency=USD&condition=Mint+%2833M%29',
		'7983975'
	],
	[
		'https://www.discogs.com/sell/release/7983975?currency=USD&condition=Mint+%28M%2932323232323',
		'7983975'
	]
]

export const vimeoDict = [
	[
		'https://vimeo.com/36579366',
		'36579366'
	],
	[
		'http://player.vimeo.com/video/25451551',
		'25451551'
	],
	[
		'http://player.vimeo.com/video/25451551',
		'25451551'
	],
	[
		'https://vimeo.com/342770360#comment_17535401',
		'342770360'
	],
	[
		'https://vimeo.com/342770360?test="22"#comment_17535401',
		'342770360'
	]
]

export const soundcloudDict = [
	[
		'https://soundcloud.com/lyl_radio/sets/lyl-ra-at-dizonord',
		'lyl_radio/sets/lyl-ra-at-dizonord',
		'sets'
	],
	[
		'https://soundcloud.com/lyl_radio/lyl-ra-at-dizonord-170519-w-dizonord-djs?in=lyl_radio/sets/lyl-ra-at-dizonord',
		'lyl_radio/lyl-ra-at-dizonord-170519-w-dizonord-djs',
		'track'
	],
	[
		'https://soundcloud.com/lyl_radio/sur-ecoute-250419-w-pam-belec-danse-toujours-sainte-rita',
		'lyl_radio/sur-ecoute-250419-w-pam-belec-danse-toujours-sainte-rita',
		'track'
	]
]


/*
	 tests
 */

test('There are available media dictionnaries', t => {
	t.is(youtubeDict.length, 9)
})
