import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Spotify from './Spotify';

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [playlistCards, setPlaylistCards] = React.useState([]);

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  async function handleClick() {
    if(searchValue){
      setCards(await Spotify.search(searchValue));
      setSearchValue('');
    }
  }

  return (
    <div id="main">
      <Header />
      <SearchBar handleChange={handleChange} handleClick={handleClick} value={searchValue} />
      <SearchResults cards={cards} setCards={setCards} playlistCards={playlistCards} setPlaylistCards={setPlaylistCards} />
    </div>
  );
}

export default App;
