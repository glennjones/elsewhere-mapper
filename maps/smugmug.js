{
    "name": "Smugmug",
    "domain": "smugmug.com",
    "urlmappings": [{
        "urltemplate": "http://{username}.smugmug.com/",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://{username}.smugmug.com/hack/feed.mg?Type=nickname&Data={username}&format=atom10",
        "schema": "Atom",
        "contenttype": "Photos",
        "mediatype": "Atom"
    }],
    "www": true
}