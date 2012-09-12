{
    "name": "Stumbleupon",
    "domain": "stumbleupon.com",
    "urlMappings": [{
        "urlTemplate": "http://stumbleupon.com/stumbler/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://stumbleupon.com/rss/stumbler/{username}/likes",
        "schema": "Rss",
        "contentType": "Bookmarks",
        "mediaType": "Rss"
    }, {
        "urlTemplate": "http://stumbleupon.com/rss/stumbler/{username}/comments",
        "schema": "Rss",
        "contentType": "Activity",
        "mediaType": "Rss"
    }],
    "www": true
}

