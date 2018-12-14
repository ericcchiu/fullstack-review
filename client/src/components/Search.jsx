import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    console.log('Search Value:', e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  search() {
    console.log('Search Component: Search was triggered and button was clicked!!');
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={(event) => this.onChange(event)}/>       
      <button onClick={() => this.search()}> Add Repos </button>
    </div>) 
  }
}

export default Search;