{
    "name": "Readernaut",
    "domain": "readernaut.com",
    "urlMappings": [{
        "urlTemplate": "http://readernaut.com/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://readernaut.com/feeds/rss/{username}",
        "schema": "Rss",
        "contentType": "Activity",
        "mediaType": "Rss"
    }],
    "www": true
}