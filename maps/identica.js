{
    "name": "Identica",
    "domain": "identi.ca",
    "urlMappings": [{
        "urlTemplate": "http://identi.ca/{username}",
        "schema": "hCard",
        "contentType": "Profile",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://identi.ca/{username}/foaf",
        "schema": "FOAF",
        "contentType": "Profile",
        "mediaType": "Xml"
    }, {
        "urlTemplate": "http://identi.ca/{username}/subscriptions?page={pagenumber}",
        "schema": "hCard",
        "contentType": "Friends",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://identi.ca/{username}",
        "schema": "hAtom",
        "contentType": "Status",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://identi.ca/{username}",
        "schema": "rel-tag",
        "contentType": "Interests",
        "mediaType": "Html"
    }, {
        "urlTemplate": "http://identi.ca/{username}/all",
        "schema": "hAtom",
        "contentType": "Friends Status",
        "mediaType": "Html"
    }],
    "www": true
}