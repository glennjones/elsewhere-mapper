{
    "name": "Last.fm",
    "domain": "last.fm",
    "urlmappings": [{
        "urltemplate": "http://last.fm/user/{username}",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://last.fm/user/{username}/friends?page={pagenumber}",
        "schema": "hCard",
        "contenttype": "Friends",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://last.fm/user/{username}/events",
        "schema": "hCalendar",
        "contenttype": "Events",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://ws.audioscrobbler.com/2.0/user/{username}/recenttracks.rss",
        "schema": "Rss",
        "contenttype": "Activity",
        "mediatype": "Rss"
    }, {
        "urltemplate": "http://ws.audioscrobbler.com/2.0/user/{username}/events.rss",
        "schema": "Rss",
        "contenttype": "Events",
        "mediatype": "Rss"
    }],
    "www": true
}