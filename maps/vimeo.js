{
    "name": "Vimeo",
    "domain": "vimeo.com",
    "urlmappings": [{
        "urltemplate": "http://vimeo.com/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://vimeo.com/{username}/contacts/sort:newest/page:{pagenumber}",
        "schema": "None",
        "contenttype": "Friends",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://vimeo.com/{username}/videos/rss",
        "schema": "Atom",
        "contenttype": "Video",
        "mediatype": "Atom"
    }],
    "www": true
}