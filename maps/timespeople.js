{
    "name": "Times People",
    "domain": "timespeople.nytimes.com",
    "urlmappings": [{
        "urltemplate": "http://timespeople.nytimes.com/view/user/{userid}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://timespeople.nytimes.com/view/user/{userid}/activities.html",
        "schema": "None",
        "contenttype": "None",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://timespeople.nytimes.com/view/user/{userid}/rss.xml",
        "schema": "Rss",
        "contenttype": "Activity",
        "mediatype": "Rss"
    }],
    "www": true
}