{
    "name": "GetSatisfaction",
    "domain": "getsatisfaction.com",
    "urlmappings": [{
        "urltemplate": "http://getsatisfaction.com/people/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://getsatisfaction.com/people/{username}.rss",
        "schema": "Rss",
        "contenttype": "Activity",
        "mediatype": "Rss"
    }],
    "www": true
}