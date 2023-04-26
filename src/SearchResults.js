import React from 'react';
import Playlist from './Playlist';
import Track from './Track';

function SearchResults(props) {



    return (
        <div id="content">
            <div id="result-div">
                <h2>Search Results</h2>
                <Track name="name" artist="artist" />
                <Track name="name" artist="artist" />
            </div>
            <Playlist />
        </div>
    )
}

export default SearchResults;