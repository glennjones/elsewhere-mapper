{
    "name": "Wordpress",
    "domain": "wordpress.com",
    "urlmappings": [{
        "urltemplate": "http://{username}.wordpress.com/",
        "schema": "None",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://{username}.wordpress.com/feed/atom/",
        "schema": "Atom",
        "contenttype": "Lifestream",
        "mediatype": "Atom"
    }],
    "www": true
}