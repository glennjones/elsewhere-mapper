{
    "name": "Picasa",
    "domain": "picasaweb.google.com",
    "urlmappings": [{
        "urltemplate": "http://picasaweb.google.com/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://picasaweb.google.com/data/feed/base/user/{username}?alt=rss&kind=album&hl=en_US&access=public",
        "schema": "Rss",
        "contenttype": "Images",
        "mediatype": "Rss"
    }],
    "www": true
}