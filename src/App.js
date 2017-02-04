import React, { Component, PropTypes as T } from 'react';
import GifList                              from './components/GifList'
import SearchBar                            from './components/SearchBar'

import request from 'superagent';

class App extends Component {
  static propTypes = {
    onTermChange: T.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }
  }

  handleTermChange = (term) => {
    console.log(term)
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
