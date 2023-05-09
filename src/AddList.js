import React from 'react';
import Spotify from './Spotify';

function AddList(props) {

    const [playlistName, setPlaylistName] = React.useState('');

    function handleChange(e) {
        setPlaylistName(e.target.value);
    }

    async function handleClick() {
        if (playlistName) {
            const trackUris = [];
            for (const song of props.list) {
                trackUris.push(song.uri);
            }
            await Spotify.savePlaylist(playlistName, trackUris);
            props.setList([]);
        }
        setPlaylistName('');
    }

    return (
        <>
            {props.list.length > 0 && <input type="text" id="playlist-name" value={playlistName} onChange={handleChange} />}
            {props.list.length > 0 && <button id="upload-button" onClick={handleClick} >Add to Spotify</button>}
        </>
    )
}

export default AddList;