import React from 'react';
import Playlist from './Playlist';
import Track from './Track';

function SearchResults(props) {

    const searchTerm = props.searchValue;
    const [cards, setCards] = React.useState([<Track name="name1" artist="artist" id="1" key="1" handleClick={handleClick}/>, <Track name="name2" artist="artist" id="2" key="2" handleClick={handleClick}/>]);

    function handleClick(e) {
        setCards(cards.filter(card => card.props.id != e.target.id));
    }

    return (
        <div id="content">
            <div id="result-div">
                <h2>Search Results</h2>
                {cards}
            </div>
            <Playlist />
        </div>
    )
}

export default SearchResults;