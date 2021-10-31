import React from 'react';

const Search = ({ search, handleSearch }) => {
    return (
        <input className='searchCharacter' placeholder='Search by name' type='text' value={search} onChange={handleSearch} />
    );
}

export default Search;
