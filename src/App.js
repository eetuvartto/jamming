import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Spotify from './Spotify';

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [playlistCards, setPlaylistCards] = React.useState([]);
  const [auth, setAuth] = React.useState(false);

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  async function handleClick() {
    if(searchValue){
      setCards(await Spotify.search(searchValue));
      setSearchValue('');
    }
  }

  function handleAuth() {
    Spotify.getAccessToken();
    setAuth(true)
  }

  return (
    <div id="main">
      <Header />
      {!auth && <button id="auth-button" onClick={handleAuth}>Authenticate</button>}
      {auth && <SearchBar handleChange={handleChange} handleClick={handleClick} value={searchValue} />}
      {auth && <SearchResults cards={cards} setCards={setCards} playlistCards={playlistCards} setPlaylistCards={setPlaylistCards} />}
    </div>
  );
}

export default App;
