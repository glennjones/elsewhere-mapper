{
    "name": "Readernaut",
    "domain": "readernaut.com",
    "urlmappings": [{
        "urltemplate": "http://readernaut.com/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://readernaut.com/feeds/rss/{username}",
        "schema": "Rss",
        "contenttype": "Activity",
        "mediatype": "Rss"
    }],
    "www": true
}