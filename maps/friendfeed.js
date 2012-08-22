{
    "name": "FriendFeed",
    "domain": "friendfeed.com",
    "urlmappings": [{
        "urltemplate": "http://friendfeed.com/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://friendfeed.com/{username}/services",
        "schema": "XFN",
        "contenttype": "Services",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://friendfeed.com/{username}?format=atom",
        "schema": "Atom",
        "contenttype": "Lifestream",
        "mediatype": "Atom"
    }],
    "www": true
}