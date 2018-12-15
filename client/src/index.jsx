import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoCount from './components/RepoCount.jsx';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  search (term) {
    console.log(`APP COMPONENT: ${term} was searched`);
    console.log(term);
    const githubHandler = { 
      handler: term
    }
    $.post('/repos', githubHandler)
    .done((gitHubObj) => {
      console.log('Successfully searched for the github user', gitHubObj);
      this.setState({
        repos: gitHubObj
      })
    })
    .fail((err) => console.log('Failure making a post request to obtain handler repos', err)); 
  }

  componentDidMount () { 
    $.get('/repos')
    .done((reposArr) => { 
      let parsedRepos = JSON.parse(reposArr);
      this.setState({
        repos: parsedRepos
      });
    })
    .fail((err) => {
      console.log('Error making a get request to server', err); 
    })
  }

  render () {
    console.log('OUR REPOS', this.state.repos)

    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoCount repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <List repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));