const express = require('express');
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const port = 1128;
const helper = require('../helpers/github.js');
const db = require('../database/index.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  helper.getReposByUsername(req.body.handler, (err, gitHubObj) => { 
    console.log(req.body.handler);
    if (err) {
      console.log('Error getting repos from github', err); 
      res.status(404);
    } else { 
      // console.log(gitHubObj)
      db.save(gitHubObj, (err, product) => { 
        if (err) { 
          console.log('Error save to database', err);
        } else {
          console.log('PRODUCT FROM DB', JSON.stringify(product));
          res.status(201).send(product);
        }
      });
    }
  }); 
 
  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.retrieve('ericcchiu')
  .then((repos) => { 
    
    res.status(200).end(JSON.stringify(repos)); 
  })
  .catch((err) => {
    console.log('Error get repos from db', err)
    res.status(500).send('Error retrieving repos from db with this handler');  
  });

});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

