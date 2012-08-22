{
    "name": "Twitpic",
    "domain": "twitpic.com",
    "urlmappings": [{
        "urltemplate": "http://www.twitpic.com/photos/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://twitpic.com/photos/{username}/feed.rss",
        "schema": "Rss",
        "contenttype": "Photos",
        "mediatype": "Rss"
    }],
    "www": true
}