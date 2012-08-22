{
    "name": "Blip.fm",
    "domain": "blip.fm",
    "urlmappings": [{
        "urltemplate": "http://blip.fm/{username}/",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://blip.fm/feed/{username}",
        "schema": "Atom",
        "contenttype": "Audio",
        "mediatype": "Atom"
    }],
    "www": true
}