{
    "name": "Stumbleupon",
    "domain": "stumbleupon.com",
    "urlmappings": [{
        "urltemplate": "http://stumbleupon.com/stumbler/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://stumbleupon.com/rss/stumbler/{username}/likes",
        "schema": "Rss",
        "contenttype": "Bookmarks",
        "mediatype": "Rss"
    }, {
        "urltemplate": "http://stumbleupon.com/rss/stumbler/{username}/comments",
        "schema": "Rss",
        "contenttype": "Activity",
        "mediatype": "Rss"
    }],
    "www": true
}

