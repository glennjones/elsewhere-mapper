{
    "name": "Youtube",
    "domain": "youtube.com",
    "urlmappings": [{
        "urltemplate": "http://gdata.youtube.com/feeds/base/users/{username}/uploads?alt=rss&v=2",
        "schema": "Atom",
        "contenttype": "Video",
        "mediatype": "Atom"
    }, {
        "urltemplate": "http://youtube.com/rss/user/{username}/videos.rss",
        "schema": "Rss",
        "contenttype": "Video",
        "mediatype": "Rss"
    }, {
        "urltemplate": "http://youtube.com/user/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://www.youtube.com/profile?user={username}",
        "schema": "None",
        "contenttype": "None",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://www.youtube.com/user/{username}",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }],
    "www": true
}