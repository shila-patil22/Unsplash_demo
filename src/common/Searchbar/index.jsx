import React from 'react'
import { Search } from 'react-feather';
import './style.css'

export const SearchBar = ({ round }) => {

    return (
        <div className={`searchbar_input_wrapper ${!round ? 'square' : ''}`}>
            <Search color="#767676" size={16} />
                <input
                    className='searchbar_input' placeholder='search free high resolution photos'
                />
        </div>
    )
}
