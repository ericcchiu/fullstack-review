const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request.get(options, function(err, responseBody) {
    if(err) { 
      // console.log('Error making a post request to github', err); 
      callback(err, null); 
    } else { 
      // console.log('THIS IS OUR RESPONSE FROM githb', responseBody);
      callback(null, responseBody);
    }
  })


}

module.exports.getReposByUsername = getReposByUsername;