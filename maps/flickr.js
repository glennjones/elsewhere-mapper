{
    "name": "Flickr",
    "domain": "flickr.com",
    "urlmappings": [{
        "urltemplate": "http://flickr.com/people/{username}/",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://flickr.com/people/{username}/",
        "schema": "XFN",
        "contenttype": "Services",
        "mediatype": "Html"
    },  {
        "urltemplate": "http://api.flickr.com/services/feeds/photos_public.gne?id={userid}&format=rss_200",
        "schema": "Rss",
        "contenttype": "Images",
        "mediatype": "Rss"
    }, {
        "urltemplate": "http://api.flickr.com/services/feeds/photos_public.gne?id={userid}&format=atom",
        "schema": "Atom",
        "contenttype": "Images",
        "mediatype": "Atom"
    }, {
        "urltemplate": "http://flickr.com/photos/{username}/",
        "schema": "None",
        "contenttype": "Images",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://flickr.com/people/{username}/contacts/?page={pagenumber}",
        "schema": "XFN",
        "contenttype": "Friends",
        "mediatype": "Html"
    }],
    "www": true
}