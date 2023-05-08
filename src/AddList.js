import React from 'react';

function AddList(props) {

    const [playlistName, setPlaylistName] = React.useState('');

    function handleChange(e) {
        setPlaylistName(e.target.value);
    }

    function handleClick() {
        alert(playlistName);
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