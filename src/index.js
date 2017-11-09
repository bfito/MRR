import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import {API_KEY} from '../keys.js';


// Create a new component. This component should produce
// some html
class App extends Component {
  constructor(props) {

  this.state = { videos: [] };

  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    // This will update the list with a new list of videos
    this.state({ videos });
    // Syntactic sugar.ES6 allows to compact the code, when key and property are the same variable name
    // this.state({ videos: videos}); is the sames as this.state({ videos });
    });
  }
  render () {
  return (
    <div>
      <SearchBar />
    </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
