import React from 'react';
import Track from './Track';
import AddList from './AddList';

function SearchResults(props) {

    //const searchTerm = props.searchValue;

    const testArray = [
        {
            name: 'name1',
            artist: 'artist',
            id: 1,
            key: 1,
        },
        {
            name: 'name2',
            artist: 'artist',
            id: 2,
            key: 2,
        },
        {
            name: 'name3',
            artist: 'artist',
            id: 3,
            key: 3,
        }
    ];
    
    //Arrays of objects
    const [cards, setCards] = React.useState(testArray);
    const [playlistCards, setPlaylistCards] = React.useState([]);

    //Creates track cards from array of objects with data for the cards
    //onClick sends data to playlist and removes the card from the search results
    function createTrack(cardArray) {
        return cardArray.map(card => <Track
            name={card.name}
            artist={card.artist}
            id={card.id}
            key={card.key}
            text={"Add"}
            onClick={() => {
                setCards(cards.filter(a => a.id !== card.id));
                const newCard = cards.filter(a => a.id === card.id);
                setPlaylistCards([newCard[0], ...playlistCards]);
            }}
            />)
    }

    //Same but for the playlist
    function returnTrack(cardArray) {
        return cardArray.map(card => <Track
            name={card.name}
            artist={card.artist}
            id={card.id}
            key={card.key}
            text={"Clear"}
            onClick={() => {
                setPlaylistCards(playlistCards.filter(a => a.id !== card.id));
                const newCard = playlistCards.filter(a => a.id === card.id);
                setCards([newCard[0], ...cards]);
            }}
            />)
    }

    return (
        <div id="content">
            <div id="result-div">
                <h2>Search Results</h2>
                {createTrack(cards)}
            </div>
            <div id="playlist-div">
                <h2>Playlist</h2>
                {returnTrack(playlistCards)}
                <AddList list={playlistCards} />
            </div> 
        </div>
    )
}

export default SearchResults;