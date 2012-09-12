{
    "name": "Plurk",
    "domain": "plurk.com",
    "urlMappings": [{
        "urlTemplate": "http://www.plurk.com/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://www.plurk.com/{username}.xml",
        "schema": "Atom",
        "contentType": "Events",
        "mediaType": "Atom"
    }],
    "www": true
}