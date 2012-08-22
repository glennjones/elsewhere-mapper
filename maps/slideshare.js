{
    "name": "Slideshare",
    "domain": "slideshare.net",
    "urlmappings": [{
        "urltemplate": "http://slideshare.net/rss/user/{username}",
        "schema": "Rss",
        "contenttype": "Slides",
        "mediatype": "Rss"
    }, {
        "urltemplate": "http://slideshare.net/{username}",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://slideshare.net/{username}/presentations",
        "schema": "None",
        "contenttype": "None",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://slideshare.net/{username}/followers/{pagenumber}",
        "schema": "hCard",
        "contenttype": "Friends",
        "mediatype": "Html"
    }],
    "www": true
}