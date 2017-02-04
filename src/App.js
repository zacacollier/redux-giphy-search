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
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    })
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
