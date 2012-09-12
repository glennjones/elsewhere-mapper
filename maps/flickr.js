{
    "name": "Flickr",
    "domain": "flickr.com",
    "urlMappings": [{
        "urlTemplate": "http://flickr.com/people/{username}/",
        "schema": "hCard",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://flickr.com/people/{username}/",
        "schema": "XFN",
        "contentType": "Services",
        "mediaType": "Html"
    },  {
        "urlTemplate": "http://api.flickr.com/services/feeds/photos_public.gne?id={userid}&format=rss_200",
        "schema": "Rss",
        "contentType": "Images",
        "mediaType": "Rss"
    }, {
        "urlTemplate": "http://api.flickr.com/services/feeds/photos_public.gne?id={userid}&format=atom",
        "schema": "Atom",
        "contentType": "Images",
        "mediaType": "Atom"
    }, {
        "urlTemplate": "http://flickr.com/photos/{username}/",
        "schema": "None",
        "contentType": "Images",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://flickr.com/people/{username}/contacts/?page={pagenumber}",
        "schema": "XFN",
        "contentType": "Friends",
        "mediaType": "Html"
    }],
    "www": true
}