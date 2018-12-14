import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

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
    .done(() => console.log('Successfully searched for the github user'))
    .fail((err) => console.log('Failure making a post request to obtain handler repos', err)); 
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));