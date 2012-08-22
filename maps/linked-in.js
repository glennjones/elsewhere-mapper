{
    "name": "Linked-in",
    "domain": "linkedin.com",
    "urlmappings": [{
        "urltemplate": "http://linkedin.com/in/{username}",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://linkedin.com/in/{username}",
        "schema": "hResume",
        "contenttype": "Resume",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://linkedin.com/pub/{username}",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://linkedin.com/pub/{username}",
        "schema": "hResume",
        "contenttype": "Resume",
        "mediatype": "Html"
    }],
    "www": true
}