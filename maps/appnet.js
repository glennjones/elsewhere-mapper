{
    "name": "App.net",
    "domain": "alpha.app.net",
    "urlMappings": [{
        "urlTemplate": "https://alpha.app.net/{username}/",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "https://alpha-api.app.net/feed/rss/users/{userid}/posts",
        "schema": "Atom",
        "contentType": "Status",
        "mediaType": "Atom"
    }],
    "www": false
}