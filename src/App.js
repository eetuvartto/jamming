import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Spotify from './Spotify';

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [playlistCards, setPlaylistCards] = React.useState([]);
  const [token, setToken] = React.useState(Spotify.token);

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  async function handleClick() {
    if(searchValue){
      setCards(await Spotify.search(searchValue));
      setSearchValue('');
    }
  }

  async function handleAuth() {
    await Spotify.getAccessToken();
    setToken(Spotify.token);
  }

  return (
    <div id="main">
      <Header />
      {!token && <button id="auth-button" onClick={handleAuth}>Authenticate</button>}
      {token && <SearchBar handleChange={handleChange} handleClick={handleClick} value={searchValue} />}
      {token && <SearchResults cards={cards} setCards={setCards} playlistCards={playlistCards} setPlaylistCards={setPlaylistCards} />}
    </div>
  );
}

export default App;
