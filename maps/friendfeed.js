{
    "name": "FriendFeed",
    "domain": "friendfeed.com",
    "urlMappings": [{
        "urlTemplate": "http://friendfeed.com/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://friendfeed.com/{username}/services",
        "schema": "XFN",
        "contentType": "Services",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://friendfeed.com/{username}?format=atom",
        "schema": "Atom",
        "contentType": "Lifestream",
        "mediaType": "Atom"
    }],
    "www": true
}