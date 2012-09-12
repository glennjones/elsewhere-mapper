{
    "name": "Stackoverflow",
    "domain": "stackoverflow.com",
    "urlMappings": [{
        "urlTemplate": "http://stackoverflow.com/users/{userid}/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://stackoverflow.com/users/{userid}/{username}",
        "schema": "XFN",
        "contentType": "Services",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://stackoverflow.com/feeds/user/{userid}",
        "schema": "Rss",
        "contentType": "Activity",
        "mediaType": "Rss"
    }],
    "www": true
}

