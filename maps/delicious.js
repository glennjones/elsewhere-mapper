{
    "name": "Delicious",
    "domain": "delicious.com",
    "urlMappings": [{
        "urlTemplate": "http://delicious.com/{username}/tags",
        "schema": "rel-tag",
        "contentType": "Interests",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://delicious.com/v2/rss/{username}",
        "schema": "Rss",
        "contentType": "Bookmarks",
        "mediaType": "Rss"
    }, {
        "urlTemplate": "http://delicious.com/v1/rss/{username}",
        "schema": "None",
        "contentType": "None",
        "mediaType": "Rss"
    }, {
        "urlTemplate": "http://delicious.com/rss/{username}",
        "schema": "None",
        "contentType": "None",
        "mediaType": "Rss"
    }, {
        "urlTemplate": "http://delicious.com/{username}",
        "schema": "None",
        "contentType": "Profile",
        "mediaType": "Html"
    }],
    "www": true
}

// Projects needs support for post-processsor to add this section
// {
//     "name": "Delicious",
//     "domain": "del.icio.us",
//     "urlMappings": [{
//         "urlTemplate": "http://del.icio.us/{username}/tags",
//         "schema": "rel-tag",
//         "contentType": "Interests",
//         "mediaType": "Html"
//     }, {
//         "urlTemplate": "http://del.icio.us/v2/rss/{username}",
//         "schema": "Rss",
//         "contentType": "Bookmarks",
//         "mediaType": "Rss"
//     }, {
//         "urlTemplate": "http://del.icio.us/v1/rss/{username}",
//         "schema": "None",
//         "contentType": "None",
//         "mediaType": "Rss"
//     }, {
//         "urlTemplate": "http://del.icio.us/rss/{username}",
//         "schema": "None",
//         "contentType": "None",
//         "mediaType": "Rss"
//     }, {
//         "urlTemplate": "http://del.icio.us/{username}",
//         "schema": "None",
//         "contentType": "Profile",
//         "mediaType": "Html"
//     }],
//     "www": true
// }


