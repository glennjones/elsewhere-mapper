{
    "name": "Stackoverflow",
    "domain": "stackoverflow.com",
    "urlmappings": [{
        "urltemplate": "http://stackoverflow.com/users/{userid}/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://stackoverflow.com/users/{userid}/{username}",
        "schema": "XFN",
        "contenttype": "Services",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://stackoverflow.com/feeds/user/{userid}",
        "schema": "Rss",
        "contenttype": "Activity",
        "mediatype": "Rss"
    }],
    "www": true
}

