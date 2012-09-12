{
    "name": "Slideshare",
    "domain": "slideshare.net",
    "urlMappings": [{
        "urlTemplate": "http://slideshare.net/rss/user/{username}",
        "schema": "Rss",
        "contentType": "Slides",
        "mediaType": "Rss"
    }, {
        "urlTemplate": "http://slideshare.net/{username}",
        "schema": "hCard",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://slideshare.net/{username}/presentations",
        "schema": "None",
        "contentType": "None",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://slideshare.net/{username}/followers/{pagenumber}",
        "schema": "hCard",
        "contentType": "Friends",
        "mediaType": "Html"
    }],
    "www": true
}