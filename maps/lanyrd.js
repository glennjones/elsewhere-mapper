{
    "name": "Lanyrd",
    "domain": "lanyrd.com",
    "urlmappings": [{
        "urltemplate": "http://lanyrd.com/people/{username}/",
        "schema": "None",
        "contenttype": "None",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://lanyrd.com/profile/{username}/",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://lanyrd.com/profile/{username}/",
        "schema": "rel-tag",
        "contenttype": "Interests",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://lanyrd.com/profile/{username}/future/",
        "schema": "hCalendar",
        "contenttype": "Events",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://lanyrd.com/profile/{username}/past/",
        "schema": "hCalendar",
        "contenttype": "Events",
        "mediatype": "Html"
    }],
    "www": true
}