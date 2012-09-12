{
    "name": "Github",
    "domain": "github.com",
    "urlMappings": [{
        "urlTemplate": "https://github.com/{username}.atom",
        "schema": "Atom",
        "contentType": "Activity",
        "mediaType": "Atom"
    }, {
        "urlTemplate": "https://github.com/{username}",
        "schema": "hCard",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "https://github.com/{username}",
        "schema": "XFN",
        "contentType": "Services",
        "mediaType": "Html"
    }],
    "www": false
}