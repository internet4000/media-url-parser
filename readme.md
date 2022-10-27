# media-url-parser

Install with `yarn add media-url-parser` as a [npm package](https://www.npmjs.com/package/media-url-parser).

Or load from a CDN

```html
<script type="module">
  import mediaUrlParser from 'https://unpkg.com/media-url-parser'
  const x = mediaUrlParser('https://www.youtube.com/watch?v=EFh-vtZHjOQ')
  console.log(x) // {url: "https://www.youtube.com/watch?v=EFh-vtZHjOQ", provider: "youtube", id: "EFh-vtZHjOQ"}
</script>
```

Usage:

```javascript
const urlA = 'https://www.youtube.com/watch?v=OkR7UNnQU6c'
const urlB = '192.168.0.1/a/longer/path/podcast.ogg'

const resultsA = mediaUrlParser(urlA)
const resultsB = mediaUrlParser(urlB)
```

This code will output:
```javascript
// resultsA
{
    url: 'https://www.youtube.com/watch?v=OkR7UNnQU6c',
    provider: 'youtube',
    id: 'OkR7UNnQU6c'
}

// resultsB
{
    url: 'https://192.168.0.1/a/longer/path/podcast.ogg',
    provider: 'file',
    id: 'podcast.ogg' 
}

```

Supported providers are:

- [youtube](https://www.youtube.com)
- file (only remote for now, not local files)
- [discogs](https://www.discogs.com)

Possible future providers are:
- [bandcamp](https://bandcamp.com/)
- [musicbrainz](https://musicbrainz.org/)
- [mixcloud](https://www.mixcloud.com/)
- [spotify](https://www.spotify.com/)
- [soundcloud](https://soundcloud.com/)
- [youtube-music](https://music.youtube.com/)

Suggestions and PR welcome.
