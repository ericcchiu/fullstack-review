const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: false}, 
  username: { type: String, required: false, unique: false }, 
  repoName: { type: String, required: false, unique: false }, 
  starCount: { type: Number, required: false, unique: false } , 
  watchCount: {type: Number, required: false, unique: false }


});

// Create model for schema 
let Repo = mongoose.model('Repo', repoSchema);

/*** Save that saves github repos to DB ***/
const save = (githubObj, callback) => {
  
  // Store in repo array 
  const repoArray = []; 
  // Parse the body 
  const parsedRepoObj = JSON.parse(githubObj.body);
  // Iterate over the array of repos 
  for (let i = 0; i < parsedRepoObj.length; i++) { 
    // Organize repo into a document 
    const repoEntryObj = {
      id: parsedRepoObj[i].id, 
      username: parsedRepoObj[i].owner.login, 
      repoName: parsedRepoObj[i].name, 
      starCount: parsedRepoObj[i].stargazers_count, 
      watchCount: parsedRepoObj[i].watchers
    }; 

    const repo = new Repo(repoEntryObj);
    
    // Save using moongoose save function 
    repo.save((err, product) => { 
      if (err) {
        console.log('Error saving repo to the database in db/index.js file: ', err); 
        callback(err, null);
      } else { 
        console.log('Success in saving product into database in db/index.js');
        // callback(null, product);
      }
    }); 

    repoArray.push(repoEntryObj);
  }
  callback(null, repoArray);
}

/*** Retrieve that saves github repos to DB ***/
// const retrieve = (handler, callback) => { 
//   Repo.find({ username: handler }, (err, docs) => { 
//     if (err) {
//       console.log(`Error retrieving repos from DB of this username: ${username.handler}`, err);
//       callback(err, null); 
//     } else { 
//       callback(null, docs);
//     }
//   });
// }

const retrieve = (handler) => { 
  return new Promise(function(resolve, reject) { 
    Repo.find({username: handler}, (err, docs) => {
      if (err) { 
        reject(err); 
      } else { 
        resolve(docs);
      }
    });
  })

}
// module.exports.save = save;
// module.exports.retrieve = retrieve;

module.exports = { 
  save: save, 
  retrieve: retrieve
}