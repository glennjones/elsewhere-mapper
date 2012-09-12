{
    "name": "Smugmug",
    "domain": "smugmug.com",
    "urlMappings": [{
        "urlTemplate": "http://{username}.smugmug.com/",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://{username}.smugmug.com/hack/feed.mg?Type=nickname&Data={username}&format=atom10",
        "schema": "Atom",
        "contentType": "Photos",
        "mediaType": "Atom"
    }],
    "www": true
}