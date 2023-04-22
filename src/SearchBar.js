import React from 'react';

function SearchBar() {
    return (
        <div>
            <form id="search">
                <input type="text" name="search" id="searchbox" />
                <br/>
                <div id="buttondiv">
                    <button id="searchbutton">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;