{
    "name": "Github",
    "domain": "github.com",
    "urlmappings": [{
        "urltemplate": "http://github.com/{username}/",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://github.com/{username}/",
        "schema": "XFN",
        "contenttype": "Services",
        "mediatype": "Html"
    },{
        "urltemplate": "http://github.com/{username}.atom",
        "schema": "Atom",
        "contenttype": "Activity",
        "mediatype": "Atom"
    }],
    "www": true
}