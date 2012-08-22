{
    "name": "43things",
    "domain": "43things.com",
    "urlmappings": [{
        "urltemplate": "http://www.43things.com/person/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://www.43things.com/rss/uber/author?username={username}",
        "schema": "Rss",
        "contenttype": "Activity",
        "mediatype": "Rss"
    }],
    "www": true
}