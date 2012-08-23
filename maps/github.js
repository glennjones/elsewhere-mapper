{
    "name": "Github",
    "domain": "github.com",
    "urlmappings": [{
        "urltemplate": "https://github.com/{username}.atom",
        "schema": "Atom",
        "contenttype": "Activity",
        "mediatype": "Atom"
    }, {
        "urltemplate": "https://github.com/{username}",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "https://github.com/{username}",
        "schema": "XFN",
        "contenttype": "Services",
        "mediatype": "Html"
    }],
    "www": false
}