{
    "name": "Huffduffer",
    "domain": "huffduffer.com",
    "urlmappings": [{
        "urltemplate": "http://huffduffer.com/{username}",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://huffduffer.com/{username}/rss",
        "schema": "Rss",
        "contenttype": "Audio",
        "mediatype": "Rss"
    }, {
        "urltemplate": "http://huffduffer.com/{username}",
        "schema": "hAtom",
        "contenttype": "Audio",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://huffduffer.com/{username}",
        "schema": "rel-tag",
        "contenttype": "Interests",
        "mediatype": "Html"
    }],
    "www": true
}