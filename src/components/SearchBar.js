import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onTermChange(term);
  }
  render() {
    return (
      <div>
        <input onChange={e => this.onInputChange(e.target.value)} />
      </div>
    )
  }
}

export default SearchBar;
