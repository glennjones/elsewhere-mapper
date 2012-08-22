{
    "name": "Plurk",
    "domain": "plurk.com",
    "urlmappings": [{
        "urltemplate": "http://www.plurk.com/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://www.plurk.com/{username}.xml",
        "schema": "Atom",
        "contenttype": "Events",
        "mediatype": "Atom"
    }],
    "www": true
}