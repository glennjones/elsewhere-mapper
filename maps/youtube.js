{
    "name": "Youtube",
    "domain": "youtube.com",
    "urlMappings": [{
        "urlTemplate": "http://gdata.youtube.com/feeds/base/users/{username}/uploads?alt=rss&v=2",
        "schema": "Atom",
        "contentType": "Video",
        "mediaType": "Atom"
    }, {
        "urlTemplate": "http://youtube.com/rss/user/{username}/videos.rss",
        "schema": "Rss",
        "contentType": "Video",
        "mediaType": "Rss"
    }, {
        "urlTemplate": "http://youtube.com/user/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://www.youtube.com/profile?user={username}",
        "schema": "None",
        "contentType": "None",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://www.youtube.com/user/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }],
    "www": true
}