import React from 'react';
import Playlist from './Playlist';

function SearchResults(props) {
    return (
        <div id="content">
            <div id="result-div">
                <p>{props.searchValue}</p>
            </div>
            <Playlist />
        </div>
    )
}

export default SearchResults;