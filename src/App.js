import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Spotify from './Spotify';

//Main body for the app that handles the search and keeps track of the cards for search results and playlist
function App() {

  const [searchValue, setSearchValue] = React.useState(''); //For search input
  const [cards, setCards] = React.useState([]); //For search results
  const [playlistCards, setPlaylistCards] = React.useState([]); //For chosen playlist

  //Makes authentication call at startup
  //Needed for fixing a bug where app reloads after first interaction
  if (!Spotify.token) {
    Spotify.getAccessToken();
  }

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
