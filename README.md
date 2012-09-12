# elsewhere-mapper

The elsewhere-mapper is part of a collection of node.js modules that enable the discovery the profiles and identities people create across the web and bring them together.


## Install

    npm install elsewhere-mapper

or

    git clone http://github.com/glennjones/elsewhere-mapper.git
    cd elsewhere-mapper
    npm link


#### Use

with JSON from elsewhere module

    var mapper = require("elsewhere-mapper");

    mapper.parseJSON({}, {}, function(data){
        // do something with data
    });

with list of URLs

    var mapper = require("elsewhere-mapper");

    mapper.parseUrls('http://glennjones.net/about', {}, function(data){
        // do something with data
    });



