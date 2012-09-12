{
    "name": "Lanyrd",
    "domain": "lanyrd.com",
    "urlMappings": [{
        "urlTemplate": "http://lanyrd.com/people/{username}/",
        "schema": "None",
        "contentType": "None",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://lanyrd.com/profile/{username}/",
        "schema": "hCard",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://lanyrd.com/profile/{username}/",
        "schema": "rel-tag",
        "contentType": "Interests",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://lanyrd.com/profile/{username}/future/",
        "schema": "hCalendar",
        "contentType": "Events",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://lanyrd.com/profile/{username}/past/",
        "schema": "hCalendar",
        "contentType": "Events",
        "mediaType": "Html"
    }],
    "www": true
}