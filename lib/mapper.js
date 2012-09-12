var mapdata = require('../lib/mapdata.json'),
    url = require('url')
  

/**
 * Maps the Urls
 * urls: a list of absolute url starting with protocal ie http or https
 * options: supports options
 * callback: a function which is passed one argument, the return mapper object 
 */
function parseUrls (urls, options, callback) {
    var urlArr = convertStringToUrlArr(urls);
    var domainArr = parseDomainsFromUrls(urlArr);
    callback( domainArr );
}


/**
 * Returns a list of supported sites
 * callback: a function which is passed one argument, the return mapper object 
 */
function supportedSites(callback){
    var out = [];
    for (var x = 0; x < mapdata.length; x++) {
        out.push(mapdata[x].name);
    }
    callback( out );
}


// converts a comma delimited string 
// of urls into array of url objects
convertStringToUrlArr = function(str){
    var items = [],
        urls = [],
        i
    if(str && trim(str) != ''){  
        if(str.indexOf(',') > -1){
            items = str.split(',');
        }else{
            items[0] = str;
        }
        i = items.length;
        while (i--) {
            if(trim(items[i]) !== '')
                urls.push( url.parse(items[i], true) );
        }
    }
    return urls;
}


// looks to see if the domain/site is supported
parseDomainsFromUrls = function(urlArr){
    var items = []
    for (var x = 0; x < urlArr.length; x++) {
        var found = false
        for (var i = 0; i < mapdata.length; i++) {    
            if(compareRootDomain(urlArr[x].host.replace('www.',''), mapdata[i].domain) ){
                items.push( getIdentity(urlArr[x], clone(mapdata[i]) )); 
                found = true;
                break;
            } 
        }
        if(!found)
            items.push( {'domain-not-mapped': url.format(urlArr[x])});
    }
    return postProcess(items);
}


// takes raw list of items, returns them grouped and sorted
postProcess = function(items){
    var identities = [],
        notMapped = [],
        notParsed = [],
        i = items.length

    while (i--) {
        if(items[i]['url-not-parsed'])
            notParsed.push(items[i]['url-not-parsed']);

        if(items[i]['domain-not-mapped'])
            notMapped.push(items[i]['domain-not-mapped']);

        if(items[i]['domain'])
            identities.push(items[i]);
    }  
    identities = identities.sort(sortBySGN)

    // dedup list of identities based on sgn
    var x = identities.length
    while (x--) {
        if(x > 0){
            if(isUniqueIdentity(identities[x],identities[x-1])){
                identities.splice(x, 1);
            }
        }
    }
    
    return {
        'identities' : identities,
        'domainsNotMapped' : notMapped.sort(),
        'urlsNotParsed' : notParsed.sort()
    };
}




// Utility functions
// ----------------------------------------------------


// find the sgn and builds the identity object
getIdentity = function(urlObj, siteObj) {
     var identity = {'url-not-parsed': url.format(urlObj)};
        
     // Loop all the urlmappings for site object
     for(var y = 0; y <= siteObj.urlmappings.length-1; y++){
        
        var urlmapping = siteObj.urlmappings[y],
            urltemplate = urlmapping.urltemplate
            urlStr = urlObj.href;

        // remove http protocol    
        urltemplate = removeHttpHttps(urltemplate);
        console.log('test template: ' + urltemplate);  
        
        // if the urltemplate contains a username or userid parse it
        if (urltemplate != '' && (urltemplate.indexOf('{username}') > -1 || urltemplate.indexOf('{userid}') > -1)) {
            
            // break up url template
            var parts = urltemplate.split(/\{userid\}|\{username\}/),
                startMatch = false,
                endMatch = false,
                user = urlObj.href

            // remove protocol, querystring and fragment
            user = user.replace(urlObj.hash, '');
            user = user.replace(urlObj.search, ''); 
            user = removeHttpHttps(user); 
            

            // remove www if subdomain is optional
            if(siteObj.www){
                user = user.replace('www.', '') ;
                urlStr = urlStr.replace('www.', '') ;
            }

            // remove any trailing /
            if (endsWith(user,'/'))
                user = user.substring(0, user.length - 1); 
              
            console.log('user: ' + user);               
            console.log('part0: ' + parts[0]);
            console.log('part1: ' + parts[1]);   

            // remove unwanted front section of url string
            if (user.indexOf(parts[0]) === 0){
                startMatch = true;
                part = parts[0];
                user = user.substring(part.length, user.length);
            }
            
            // remove unwanted end section of url string
            if (parts.length === 2){
                // if no end part or its just and trailing /
                if (parts[1].length > 0 && parts[1] !== '/'){
                    // end part matches template
                    if (endsWith(user,parts[1])){
                        endMatch = true;
                        user = user.replace(parts[1], '');
                    } else if (endsWith(user,parts[1] + '/')) {
                        // end part matches template with a trailing /
                        endMatch = true;
                        user = user.replace(parts[1] + '/', '');
                    }
                } else {
                    endMatch = true;
                }
            }
            


            // if the user contain anymore / then do not use it
            if (user.indexOf("/") > -1)
                endMatch = false;

            console.log('built: ' + "sgn://" + siteObj.domain + "/?ident=" + user)
            console.log('tests: ' + startMatch + ' - ' + endMatch)


            if (startMatch && endMatch){
                console.log('OK: ' + "sgn://" + siteObj.domain + "/?ident=" + user)
                identity = {}; 
                identity.name = siteObj.name; 
                identity.domain = siteObj.domain; 
                identity.matchedUrl = url.format(urlObj);

                if (urlmapping.urltemplate.indexOf("{username}") > -1){
                    identity.username = user;
                    identity.sgn = "sgn://" + siteObj.domain + "/?ident=" + user;
                }

                if (urlmapping.urltemplate.indexOf("{userid}") > -1){
                    identity.userid = user;
                    identity.sgn = "sgn://" + siteObj.domain + "/?pk=" + user;
                }

                identity.endPoints = populateEndPoints(identity, siteObj);  

                break;
            }                       
        } 
    } 

    return identity;
} 


// adds the username or userid into url templates
// also exchanges urlmapping propertry to url
populateEndPoints = function(identity, siteObj){
    var urlmappings = clone(siteObj.urlmappings)
        out =[];

    var i = urlmappings.length;
    while (i--) {
        out[i] = {
            'schema': urlmappings[i].schema,
            'contenttype': urlmappings[i].contenttype,
            'mediatype': urlmappings[i].mediatype
        };

        if(identity.username)
            out[i].url = urlmappings[i].urltemplate.replace('{username}', identity.username);

        if(identity.userid)
            out[i].url = urlmappings[i].urltemplate.replace('{userid}', identity.userid);

        if(!isValidEndPoint(out[i])){
            out.splice(i, 1);
        } 
           
    }
    return out;
}


// checks to make sure endpoint urls are valid
isValidEndPoint = function(endPoint){
    if(endPoint.url.indexOf('{username}') > -1 || 
        endPoint.url.indexOf('{userid}') > -1)
        return false

    if(endPoint.schema === 'None' && 
        endPoint.contenttype === 'None')
        return false

    return true
}

isUniqueIdentity = function(identityA, identityB) {
    return (identityA.sgn === identityB.sgn);
}

removeHttpHttps = function(urlStr){
    return urlStr.replace('http://','').replace('https://','');
}

// Compares a full domain from url to a root domain
// ie www.twitter.com to twitter.com = true
compareRootDomain = function(fullDomain, rootDomain ) {
    var same = false;
    if(fullDomain !== '' || rootDomain !== ''){
        //Remove common subdomain
        fullDomain = fullDomain.toLowerCase().replace('www.','');
        // Look for full match
        if(fullDomain === rootDomain){
            same = true;
        }
    }
    return same;
};





// Compares urls for match
// ie www.twitter.com/glennjones = twitter.com/GlennJones/ 
compareUrl = function(urlA, urlB) {
    var same = false;
    
    // Remove url fragments
    if( urlA.indexOf('#') > -1)
        urlA = urlA.split('#')[0];
   
    if( urlB.indexOf('#') > -1)
        urlB = urlB.split('#')[0];
    
    if(urlA != '' || urlB != ''){
        //Remove common subdomain
        urlA = urlA.toLowerCase().replace('www.','');
        urlB = urlB.toLowerCase().replace('www.','');
        
        // Make sure anything ends with / 
        if( endsWith(urlA,'/') == false)
            urlA = urlA + '/';
            
        if( endsWith(urlB,'/') == false)
            urlB = urlB + '/';    
            
        // Look for full match
        if(urlA.toLowerCase() == urlB.toLowerCase())
            same = true;
       
    }
    return same;
};

 
 // Parses the domain name from a given URL
parseDomainFromURL = function(url) {
    var domain = "";
    if(url != undefined && url != '')
    {
        if (url.indexOf("//") > 0 ){ 
            var parts = url.split("/");
            domain = parts[2];
        }
    }
    return domain;
};


// Parses the domain name from a given SGN
// Structure of sgn - sgn://twitter.com/?pk=12497 or sgn://twitter.com/?ident=glennjones
parseDomainFromSGN = function(sgn) {
    var domain = "";
    // Temp fix for googles profile domain issue
    sgn = sgn.replace("profiles.google.com","google.com|profiles");
    sgn = sgn.substring(6,sgn.length);
    var parts = sgn.split('/');
    if(parts[0].length > -1)
        domain = parts[0];
    return domain;
};




// Sorts objects into order using the name property
sortByName = function(a, b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
};

// Sorts objects into order using the domain property
sortByDomain = function(a, b) {
    var x = a.domain.toLowerCase();
    var y = b.domain.toLowerCase();
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
};

// Sorts objects into order using the sgn property
sortBySGN = function(a, b) {
    var x = a.sgn.toLowerCase();
    var y = b.sgn.toLowerCase();
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
};


trim = function (str) {
    return str.replace(/^\s+|\s+$/g, "");
}

// simple object clone function
clone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
}


// simple endsWith function. Use with care
endsWith = function(str,test){
    var lastIndex = str.lastIndexOf(test);
    return (lastIndex != -1) && (lastIndex + test.length == str.length);
}


exports.parseUrls = parseUrls;
exports.supportedSites = supportedSites;


