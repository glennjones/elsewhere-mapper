{
    "name": "Delicious",
    "domain": "delicious.com",
    "urlmappings": [{
        "urltemplate": "http://delicious.com/{username}/tags",
        "schema": "rel-tag",
        "contenttype": "Interests",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://delicious.com/v2/rss/{username}",
        "schema": "Rss",
        "contenttype": "Bookmarks",
        "mediatype": "Rss"
    }, {
        "urltemplate": "http://delicious.com/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }],
    "www": true
}, {
    "name": "Delicious",
    "domain": "del.icio.us",
    "urlmappings": [{
        "urltemplate": "http://del.icio.us/{username}/tags",
        "schema": "rel-tag",
        "contenttype": "Interests",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://del.icio.us/v2/rss/{username}",
        "schema": "Rss",
        "contenttype": "Bookmarks",
        "mediatype": "Rss"
    }, {
        "urltemplate": "http://del.icio.us/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }],
    "www": true
}