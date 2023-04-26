import React from 'react';
import Track from './Track';

function Playlist() {
    return (
        <div id="playlist-div">
            <h2>Playlist</h2>
            <Track name="name" artist="artist" id="4" />
            <button>Send to Spotify</button>
        </div>
    )
}

export default Playlist;