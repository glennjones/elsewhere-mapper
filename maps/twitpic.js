{
    "name": "Twitpic",
    "domain": "twitpic.com",
    "urlMappings": [{
        "urlTemplate": "http://www.twitpic.com/photos/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://twitpic.com/photos/{username}/feed.rss",
        "schema": "Rss",
        "contentType": "Photos",
        "mediaType": "Rss"
    }],
    "www": true
}