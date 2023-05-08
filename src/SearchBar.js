import React from 'react';

function SearchBar(props) {

    return (
        <>
            <form id="search">
                <input type="text" name="search" id="searchbar" value={props.value} onChange={props.handleChange} />
                <br/>
                <div id="buttondiv">
                    <button type="button" id="searchbutton" onClick={props.handleClick} >Search</button>
                </div>
            </form>
        </>
    )
}

export default SearchBar;