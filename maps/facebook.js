{
    "name": "Facebook",
    "domain": "facebook.com",
    "altDomainFilter": ".facebook.",
    "altDomains": ["m.facebook.com","www.facebook.es", "www.facebook.se"],
    "urlMappings": [{
        "urlTemplate": "http://facebook.com/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://facebook.com/people/{username}/",
        "schema": "OpenGraph",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://facebook.com/pages/{username}/",
        "schema": "OpenGraph",
        "contentType": "None",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://facebook.com/{username}/posts/{*}",
        "schema": "None",
        "contentType": "None",
        "mediaType": "Html"
    }],
    "www": true,
    "blockList": [
        "https://www.facebook.com/photo.php",
        "https://www.facebook.com/login.php",
        "https://www.facebook.com/permalink.php",
        "https://www.facebook.com/story.php",
        "https://www.facebook.com/album.php"
    ]
}