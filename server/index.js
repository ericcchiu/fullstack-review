const express = require('express');
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const port = 1128;
const helper = require('../helpers/github.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('Our search term pass from client', req.body);
  // console.log('THIS IS OUR HELPER', helper.getReposByUsername)
  helper.getReposByUsername(req.body.handler, (err, gitHubObj) => { 
    if (err) {
      console.log('Error getting repos from github', err); 
      res.status(404);
    } else { 
      console.log(gitHubObj)
      res.status(200).send(gitHubObj);
    }
  }); 

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

