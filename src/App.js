import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Playlist from './Playlist';
import SearchResults from './SearchResults';

function App() {
  return (
    <div id="main">
      <Header />
      <SearchBar />
      <div id="content">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
