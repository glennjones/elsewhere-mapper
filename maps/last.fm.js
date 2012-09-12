{
    "name": "Last.fm",
    "domain": "last.fm",
    "urlMappings": [{
        "urlTemplate": "http://last.fm/user/{username}",
        "schema": "hCard",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://last.fm/user/{username}/friends?page={pagenumber}",
        "schema": "hCard",
        "contentType": "Friends",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://last.fm/user/{username}/events",
        "schema": "hCalendar",
        "contentType": "Events",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://ws.audioscrobbler.com/2.0/user/{username}/recenttracks.rss",
        "schema": "Rss",
        "contentType": "Activity",
        "mediaType": "Rss"
    }, {
        "urlTemplate": "http://ws.audioscrobbler.com/2.0/user/{username}/events.rss",
        "schema": "Rss",
        "contentType": "Events",
        "mediaType": "Rss"
    }],
    "www": true
}