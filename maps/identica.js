{
    "name": "Identica",
    "domain": "identi.ca",
    "urlmappings": [{
        "urltemplate": "http://identi.ca/{username}",
        "schema": "hCard",
        "contenttype": "Profile",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://identi.ca/{username}/foaf",
        "schema": "FOAF",
        "contenttype": "Profile",
        "mediatype": "Xml"
    }, {
        "urltemplate": "http://identi.ca/{username}/subscriptions?page={pagenumber}",
        "schema": "hCard",
        "contenttype": "Friends",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://identi.ca/{username}",
        "schema": "hAtom",
        "contenttype": "Status",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://identi.ca/{username}",
        "schema": "rel-tag",
        "contenttype": "Interests",
        "mediatype": "Html"
    }, {
        "urltemplate": "http://identi.ca/{username}/all",
        "schema": "hAtom",
        "contenttype": "Friends Status",
        "mediatype": "Html"
    }],
    "www": true
}