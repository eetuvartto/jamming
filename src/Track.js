import React from 'react';

function Track(props) {

    return (
        <div className="track">
            <div className="info">
                <p className="name">{props.name}</p>
                <p className="artist">{props.artist}</p>
            </div>
            <div className="card-button-div">
                <button className="card-button" id={props.id} onClick={props.onClick} >{props.text}</button>
            </div>
        </div>
    )
}

export default Track;