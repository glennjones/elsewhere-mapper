# elsewhere-mapper

The elsewhere-mapper is a social media profile endpoint mapper, it is part of a collection of node.js modules that enable the discovery of profiles and identities an indivdaul creates across the web.


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

with JSON from [elsewhere module](https://github.com/dharmafly/elsewhere "elsewhere node.js module")

    var mapper = require("elsewhere-mapper");

    mapper.parseElsewhereJson({ data object... },  function(data){
        // do something with data
    });


#### Response 

This will return JSON. This is an example where three urls where given:
http://github.com/glennjones,
https://github.com/glennjones/elsewhere-mapper,
http://glennjones.net

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



#### Using the server API  

Once you've cloned the project and run *npm install*, run the server *$ node bin/elsewhere-mapper* and then point your browser at localhost:8881 to try it out.  

The server API will take either a single value or a comma delimited list of URLs/SGNs. Alternatively you can also pass it a JSON string from the output of the elsewhere node.js module. Finally it supports a callback querystring item for use with any of the other three data types.


    GET http://localhost:8881/?urls=http%3A%2F%2Ftwitter.com%2Fglennjones&callback=myFunction


## Adding a new site to elsewhere-mapper

It is easy to add a new site to the list that elsewhere-mapper maps. Each site has its own mapping file, which contains a simple description in JSON of the site and a group of urltemplates for matching. This is the mapping file for dopplr.com


    {
        "name": "Dopplr",
        "domain": "dopplr.com",
        "urlMappings": [{
            "urlTemplate": "http://dopplr.com/traveller/{username}",
            "schema": "hCard",
            "contentType": "Profile",
            "mediaType": "Html"
        }, {
            "urlTemplate": "http://dopplr.com/traveller/{username}/public",
            "schema": "None",
            "contentType": "None",
            "mediaType": "Html"
        }],
        "www": true
    }


 First make sure you have the development version of elsewhere-mapper by using the following command 

    npm install --dev 

to download the package. To add a site create a new map file and add it into the maps directory. Follow the simple structure from another map file changing the values. Then create a 16x16 pixel png icon file for your site and place it in the icons directory. The icon can be copied from the favicon of the site, but it has to be in the png format.

Once you have created the map and icon files we need to compact them into the main project files.  Run node.js locally using the command 

    $ node bin/elsewhere-mapper 

in the elsewhere-mapper directory and then point your browser at localhost:8881/compress-maps/ you should see the word “done”. To compress the images [install glue](http://glue.readthedocs.org/en/latest/index.html) on your mac navigate to the elsewhere-mapper directory using the command execute 

    $ glue --html --optipng --watch icons sprites.


## Contributing to the project 

Please use github to ask me to pull your additions or corrections. The more people that help maintain this project the better the quailty of data.


## Support or Contact

Having trouble with elsewhere-mapper? Please raise an issue at: https://github.com/glennjones/elsewhere-mapper/issues


## License

The project is open sourced under MIT licenses. See the license.txt file within the project source.
