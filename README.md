# elsewhere-mapper

The elsewhere-mapper is part of a collection of node.js modules that enable the discovery of the profiles and identities an indivdaul create across the web.


## Install

    npm install elsewhere-mapper

or

    git clone http://github.com/glennjones/elsewhere-mapper.git
    cd elsewhere-mapper
    npm link


#### Use

with list of URLs

    var mapper = require("elsewhere-mapper");

    mapper.parseUrls('http://glennjones.net/about', function(data){
        // do something with data
    });

with list of SGNs

    var mapper = require("elsewhere-mapper");

    mapper.parseSgns('sgn://twitter.com/?ident=glennjones', function(data){
        // do something with data
    });

with JSON from elsewhere module

    var mapper = require("elsewhere-mapper");

    mapper.parseElsewhereJson({ data object... },  function(data){
        // do something with data
    });


#### Response 

This will return JSON. This is an example where three urls where given:
http://github.com/glennjones
https://github.com/glennjones/elsewhere-mapper
http://glennjones.net/

{
    "identities": [{
        "name": "Github",
        "domain": "github.com",
        "matchedUrl": "http://github.com/glennjones",
        "userName": "glennjones",
        "sgn": "sgn://github.com/?ident=glennjones",
        "endPoints": [{
            "schema": "Atom",
            "contentType": "Activity",
            "mediaType": "Atom",
            "url": "https://github.com/glennjones.atom"
        }, {
            "schema": "hCard",
            "contentType": "Profile",
            "mediaType": "Html",
            "url": "https://github.com/glennjones"
        }, {
            "schema": "XFN",
            "contentType": "Services",
            "mediaType": "Html",
            "url": "https://github.com/glennjones"
    }],
    "domainsNotMapped": [{
        "url": "http://glennjones.net/"
    }],
    "urlsNotParsed": [{
        "url": "https://github.com/glennjones/elsewhere-mapper"
    }]
}


#### Querying demo server.

Start the server binary:

    $ bin/elsewhere-mapper

Then visit the server URL

    http://localhost:8881/

#### Using the server API    

The seever API will take either a single value or a comma delimited list of urls/sgns. Alternatively you can also pass it a JSON string from the output of the elsewhere node.js module. Finally it supports a callback querystring item for use with any of the other three data items.


    GET http://localhost:8881/?urls=http%3A%2F%2Ftwitter.com%2Fglennjones&callback=myFunction





## Support or Contact

Having trouble with elsewhere-mapper? Please raise an issue at: https://github.com/glennjones/elsewhere-mapper/issues


## License

The project is open sourced under MIT licenses. See the license.txt file within the project source.
