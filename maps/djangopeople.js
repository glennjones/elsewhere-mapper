{
    "name": "Django People",
    "domain": "people.djangoproject.com",
    "urlMappings": [{
        "urlTemplate": "http://people.djangopeople.com/{username}/",
        "schema": "hCard",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://people.djangopeople.com/{username}/",
        "schema": "hResume",
        "contentType": "Resume",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://people.djangopeople.com/{username}/",
        "schema": "XFN",
        "contentType": "Services",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://people.djangopeople.com/{username}/",
        "schema": "rel-tag",
        "contentType": "Interests",
        "mediaType": "Html"
    }],
    "www": false
}