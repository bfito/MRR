import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import API_KEY from ./app-env.ja;

import SearchBar from './components/search_bar';

const API_KEY = process.env.API_KEY;

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. This component should produce
// some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
