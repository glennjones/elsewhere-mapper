{
    "name": "Picasa",
    "domain": "picasaweb.google.com",
    "urlMappings": [{
        "urlTemplate": "http://picasaweb.google.com/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://picasaweb.google.com/data/feed/base/user/{username}?alt=rss&kind=album&hl=en_US&access=public",
        "schema": "Rss",
        "contentType": "Images",
        "mediaType": "Rss"
    }],
    "www": true
}