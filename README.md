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




