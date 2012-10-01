var mapdata = require('../lib/mapdata.json'),
    url = require('url')
  

/**
 * Maps the Urls
 * urls: a list of absolute url starting with protocal ie http or https
 * callback: a function which is passes back mapper object  
 */
function parseUrls (urls, callback) {
    console.log('Started -----------------');
    var urlArr = convertStringToArr(urls, 'urls');
    var domainArr = parseDomainsFromUrls(urlArr);
    callback( domainArr );
}


/**
 * Maps the Sgns
 * sgns: a list of social graph nodes ie sgn://github.com/?ident=glennjones
 * callback: a function which is passes back mapper object  
 */
function parseSgns (sgns, callback) {
    console.log('Started -----------------');
    var sgnsArr = convertStringToArr(sgns, 'sgns');
    var domainArr = parseDomainsFromSgns(sgnsArr);
    callback( domainArr );
}

/**
 * Maps ElsewhereJson 
 * json: The json output of the eleswhere node.js module
 * callback: a function which is passes back mapper object 
 */
function parseElsewhereJson (json, callback) {
    console.log('Started -----------------');
    callback( parseDomainsFromJson(json) );
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


// converts a comma delimited string of urls/sgns into array
convertStringToArr = function(str, outputType){
    outputType = (outputType)? outputType : 'urls'
    var items = [],
        out = [],
        i
    if(str && trim(str) != ''){  
        if(str.indexOf(',') > -1){
            items = str.split(',');
        }else{
            items[0] = str;
        }
        i = items.length;
        while (i--) {
            if(trim(items[i]) !== ''){
                items[i] = trim(items[i].replace('\r\n',''));
                if(outputType === 'urls'){
                    out.push( url.parse(items[i], true) );
                }else{
                    out.push( items[i] );
                }
            }
        }
    }
    return out;
}


// parse results from an array of urls
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
            items.push( {'domainNotMapped': {'url': url.format(urlArr[x])}} );
    }
    return postProcess(items);
}


parseDomainsFromSgns = function(sgnArr){
    var items = []
    for (var x = 0; x < sgnArr.length; x++) {
        var found = false
        for (var i = 0; i < mapdata.length; i++) { 
            var parts, sgnDomain, userName, userId

            // Break sgn into usable parts
            parts = sgnArr[x].split('/');
            sgnDomain = parts[2];
            if(parts[3].indexOf('?ident=') > -1){
                userName = parts[3].replace('?ident=','');
            }else{
                userId = parts[3].replace('?pk=','');
            }
            var sgnDomain = getDomainFromSgn(sgnArr[x])


            if(compareRootDomain(sgnDomain, mapdata[i].domain) ){

                identity = {}; 
                identity.name = mapdata[i].name; 
                identity.domain = mapdata[i].domain; 
                if(userName) identity.userName = userName;
                if(userId) identity.userId = userId;
                identity.sgn = sgnArr[x];


                identity.endPoints = populateEndPoints(identity, clone(mapdata[i]));
                items.push(identity)
                found = true;
                break;
            } 
        }
        if(!found)
            items.push( {'domainNotMapped': {'sgn': sgnArr[x]} } );
    }
    return postProcess(items);
}


// parse results from a elsewhere object
parseDomainsFromJson = function(json){
    var items = []
    for (var x = 0; x < json.results.length; x++) {
        var found = false;
        var urlObj = url.parse(json.results[x].url, true)
        for (var i = 0; i < mapdata.length; i++) {    
            if(compareRootDomain(urlObj.host.replace('www.',''), mapdata[i].domain) ){
                var item = getIdentity(urlObj, clone(mapdata[i]));
                item.frequency = getCountFromJson(json.results[x]);
                item.icon16 = json.results[x].favicon;
                items.push( item ); 
                found = true;
                break;
            } 
        }
        if(!found)
            items.push( {'domainNotMapped': {'url': json.results[x].url,'frequency': getCountFromJson(json.results[x])}} );
    }
    return postProcess(items);
}


// get the combined count from a elsewhere result object
getCountFromJson = function(item){
    return item.inboundCount.verified + item.inboundCount.unverified;
}


// takes raw list of items, returns them grouped and sorted
postProcess = function(items){
    var identities = [],
        notMapped = [],
        notParsed = [],
        i = items.length,
        commonUserName = '',
        highestFrequencySite = '',
        out = {};

    while (i--) {
        if(items[i]['urlNotParsed'])
            notParsed.push(items[i]['urlNotParsed']);

        if(items[i]['domainNotMapped'])
            notMapped.push(items[i]['domainNotMapped']);

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

    // main collections
    if(identities.length > 0)
        out.identities = identities;

    if(notMapped.length > 0)
        out.notMapped = notMapped.sort();

    if(notParsed.length > 0)
        out.urlsNotParsed = notParsed.sort();

    // metadata
    commonUserName = commonUserName(identities);
    highestFrequencySite = highestFrequencySite(identities, notMapped, false);

    if(commonUserName !== '')
        out.commonUserName = commonUserName;

    if(highestFrequencySite !== '')
        out.highestFrequencySite = highestFrequencySite;

    return out;
}



// find the most common username by freguency of use
function commonUserName(objs){
  var i = objs.length,
      x = 0
      usernames = [],
      highest = 0, 
      out ='';

  while (x < i) {
      appendName(objs[x].userName);
      x++;
  }

  var i = usernames.length;
  while (i--) {
    if(usernames[i].count > highest){
      highest = usernames[i].count;
      out = usernames[i].name;
    }
  }

  function appendName(userName){
    var i = usernames.length;
    while (i--) {
      if(usernames[i].name === userName){
        usernames[i].count ++;
        return;
      }
    }
    usernames.push({
      'name': userName, 
      'count': 1
    })
  }

  return out;
}


// finds the site url with the highest freguency number
// noIdentities: if set to true this will most likely return personnel owned domains like a blog
function highestFrequencySite(identities, notMapped, noIdentities){
  var highest = 0, 
      out ='';

  if(!noIdentities)    
    findHighest(notMapped);   

  findHighest(identities);  

  function findHighest(arr){
    var i = arr.length,
        x = 0;
    while (x < i) {
      if(arr[x].frequency > highest){
        highest = arr[x].frequency;
        out = (arr[x].matchedUrl) ? arr[x].matchedUrl : arr[x].url;
      }
      x ++;
    }
  }    

  return out;
}




// Utility functions
// ----------------------------------------------------


// find the sgn and builds the identity object
getIdentity = function(urlObj, siteObj) {
     var identity = {'urlNotParsed': url.format(urlObj)};
        
     // Loop all the urlMappings for site object
     for(var y = 0; y <= siteObj.urlMappings.length-1; y++){
        
        var urlMapping = siteObj.urlMappings[y],
            urlTemplate = urlMapping.urlTemplate
            urlStr = urlObj.href;

        // remove http protocol    
        urlTemplate = removeHttpHttps(urlTemplate);
        
        // if the urlTemplate contains a username or userid parse it
        if (urlTemplate != '' && (urlTemplate.indexOf('{username}') > -1 || urlTemplate.indexOf('{userid}') > -1)) {
            
            // break up url template
            var parts = urlTemplate.split(/\{userid\}|\{username\}/),
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


            if (startMatch && endMatch){
                
                identity = {}; 
                identity.name = siteObj.name; 
                identity.domain = siteObj.domain; 
                identity.matchedUrl = url.format(urlObj);

                if (urlMapping.urlTemplate.indexOf("{username}") > -1){
                    identity.userName = user;
                    identity.sgn = "sgn://" + siteObj.domain + "/?ident=" + user;
                }

                if (urlMapping.urlTemplate.indexOf("{userid}") > -1){
                    identity.userId = user;
                    identity.sgn = "sgn://" + siteObj.domain + "/?pk=" + user;
                }

                identity.endPoints = populateEndPoints(identity, siteObj);  
                console.log(identity.sgn)
                break;
            }                       
        } 
    } 

    return identity;
} 


// adds the username or userid into url templates
// also exchanges urlMapping propertry to url
populateEndPoints = function(identity, siteObj){
    var urlMappings = clone(siteObj.urlMappings)
        out =[];

    var i = urlMappings.length;
    while (i--) {
        out[i] = {
            'schema': urlMappings[i].schema,
            'contentType': urlMappings[i].contentType,
            'mediaType': urlMappings[i].mediaType
        };

        if(identity.userName)
            out[i].url = urlMappings[i].urlTemplate.replace('{username}', identity.userName);

        if(identity.userId)
            out[i].url = urlMappings[i].urlTemplate.replace('{userid}', identity.userId);

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
        endPoint.contentType === 'None')
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

// returns the domain element of a sgn ie twitter.com from sgn://twitter.com/?ident=glennjones
getDomainFromSgn = function(sgn){
    parts = sgn.split('/');
    return parts[2];
}


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

// simple object clone function. Use with care
clone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
}


// simple endsWith function. Use with care
endsWith = function(str,test){
    var lastIndex = str.lastIndexOf(test);
    return (lastIndex != -1) && (lastIndex + test.length == str.length);
}


exports.parseUrls = parseUrls;
exports.parseSgns = parseSgns;
exports.parseElsewhereJson = parseElsewhereJson;
exports.supportedSites = supportedSites;


