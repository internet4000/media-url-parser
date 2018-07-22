# media-url-parser

Usage:

```javascript
const urlA = 'https://www.youtube.com/watch?v=OkR7UNnQU6c';
const urlB = '192.168.0.1/a/longer/path/podcast.ogg';

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
