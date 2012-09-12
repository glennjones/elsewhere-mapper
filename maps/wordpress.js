{
    "name": "Wordpress",
    "domain": "wordpress.com",
    "urlMappings": [{
        "urlTemplate": "http://{username}.wordpress.com/",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://{username}.wordpress.com/feed/atom/",
        "schema": "Atom",
        "contentType": "Lifestream",
        "mediaType": "Atom"
    }],
    "www": true
}