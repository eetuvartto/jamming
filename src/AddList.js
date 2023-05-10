import React from 'react';
import Spotify from './Spotify';

//Handles adding playlsits and displaying playlist name and add to Spotify button.
function AddList(props) {
    
    //For input field
    const [playlistName, setPlaylistName] = React.useState('');

    function handleChange(e) {
        setPlaylistName(e.target.value);
    }

    async function handleClick() {
        if (playlistName) {
            //Add playlist to spotify needs only a list of uris
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