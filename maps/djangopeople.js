{
    "name": "Django People",
    "domain": "people.djangoproject.com",
    "urlmappings": [{
        "urltemplate": "http://people.djangopeople.com/{username}/",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://people.djangopeople.com/{username}/",
        "schema": "hResume",
        "contenttype": "Resume",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://people.djangopeople.com/{username}/",
        "schema": "XFN",
        "contenttype": "Services",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://people.djangopeople.com/{username}/",
        "schema": "rel-tag",
        "contenttype": "Interests",
        "mediatype": "Html"
    }],
    "www": false
}