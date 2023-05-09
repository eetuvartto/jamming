import React from 'react';
import Track from './Track';
import AddList from './AddList';

function SearchResults(props) {


    //Creates track cards from array of objects with data for the cards
    //onClick sends data to playlist and removes the card from the search results
    function createTrack(cardArray) {
        return cardArray.map(card => <Track
            name={card.name}
            artist={card.artist}
            id={card.id}
            key={card.id}
            text={"Add"}
            onClick={() => {
                props.setCards(props.cards.filter(a => a.id !== card.id));
                const newCard = props.cards.filter(a => a.id === card.id);
                props.setPlaylistCards([newCard[0], ...props.playlistCards]);
            }}
            />)
    }

    //Same but for the playlist
    function returnTrack(cardArray) {
        return cardArray.map(card => <Track
            name={card.name}
            artist={card.artist}
            id={card.id}
            key={card.id}
            text={"Clear"}
            onClick={() => {
                props.setPlaylistCards(props.playlistCards.filter(a => a.id !== card.id));
                const newCard = props.playlistCards.filter(a => a.id === card.id);
                props.setCards([newCard[0], ...props.cards]);
            }}
            />)
    }

    return (
        <div id="content">
            <div id="result-div">
                <h2>Search Results</h2>
                {createTrack(props.cards)}
            </div>
            <div id="playlist-div">
                <h2>Playlist</h2>
                {returnTrack(props.playlistCards)}
                <AddList list={props.playlistCards} setList={props.setPlaylistCards} />
            </div> 
        </div>
    )
}

export default SearchResults;