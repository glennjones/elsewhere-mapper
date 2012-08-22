# node-socialgraph-mapper

A social graph mapper for node.js. 


## Install

    npm install node-socialgraph-mapper

or

    git clone http://github.com/glennjones/node-socialgraph-mapper.git
    cd node-socialgraph-mapper
    npm link


#### Use

with URLs

    var mapper = require("node-socialgraph-mapper");

    mapper.parseUrls('http://glennjones.net/about', {}, function(data){
        // do something with data
    });



