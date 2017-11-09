import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import {API_KEY} from '../keys.js';
import VideoList from './components/video_list';

// Create a new component. This component should produce
// some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // This will update the list with a new list of videos
    // Syntactic sugar.ES6 allows to compact the code, when key and property are the same variable name
    // this.state({ videos: videos}); is the sames as this.state({ videos });
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      });
    }
  render () {
  return (
    // Passing prompt videos to VideoList.
    // App is a parent component to VideoList so we need to pass the data also know as passing prompt.
    // This is jsx syntatic btw
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
