import React from 'react';
import SearchResults from './SearchResults';

function SearchBar() {

    const [searchValue, setSearchValue] = React.useState('');

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    function handleClick() {
        alert(searchValue);
        setSearchValue('');
    }

    return (
        <>
            <form id="search">
                <input type="text" name="search" id="searchbar" value={searchValue} onChange={handleChange} />
                <br/>
                <div id="buttondiv">
                    <button type="button" id="searchbutton" onClick={handleClick} >Search</button>
                </div>
            </form>
            <SearchResults />
        </>
    )
}

export default SearchBar;