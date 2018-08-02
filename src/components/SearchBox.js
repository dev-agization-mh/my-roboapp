import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div>
            <input 
                className='SearchBox'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;