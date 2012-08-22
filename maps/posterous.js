{
    "name": "Posterous",
    "domain": "posterous.com",
    "urlmappings": [{
        "urltemplate": "http://{username}.posterous.com/",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    },{
        "urltemplate": "http://{username}.posterous.com/",
        "schema": "XFN",
        "contenttype": "Services",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://{username}.posterous.com/rss.xml",
        "schema": "Rss",
        "contenttype": "Entries",
        "mediatype": "Rss"
    }],
    "www": false
}