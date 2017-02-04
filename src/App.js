import React, { Component, PropTypes as T } from 'react';
import request                              from 'superagent';

import GifList                              from './components/GifList';
import GifModal                             from './components/GifModal';
import SearchBar                            from './components/SearchBar';
import                                           './App.css';

class App extends Component {
  static propTypes = {
    onTermChange: T.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      modalIsOpen: false,
      selectedGif: null,
    }
  }

  openModal = (gif) => {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    })
  }

  closeModal = (gif) => {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    })
  }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      this.setState({gifs: res.body.data})
    })
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList   gifs={this.state.gifs}
                   onGifSelect={ selectedGif => this.openModal(selectedGif) }
        />
        <GifModal  modalIsOpen={this.state.modalIsOpen}
                   selectedGif={this.state.selectedGif}
                   onRequestClose={ () => this.closeModal() }
        />
      </div>
    );
  }
}

export default App;
