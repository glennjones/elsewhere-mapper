{
    "name": "Vimeo",
    "domain": "vimeo.com",
    "urlMappings": [{
        "urlTemplate": "http://vimeo.com/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://vimeo.com/{username}/contacts/sort:newest/page:{pagenumber}",
        "schema": "None",
        "contentType": "Friends",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://vimeo.com/{username}/videos/rss",
        "schema": "Atom",
        "contentType": "Video",
        "mediaType": "Atom"
    }],
    "www": true
}