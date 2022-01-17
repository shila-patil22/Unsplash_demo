import React, { useState } from 'react'
import { Search } from 'react-feather';
import { useHistory } from 'react-router-dom';
import './style.css'

export const SearchBar = ({ round }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const history = useHistory()

    return (
        <div className={`searchbar_input_wrapper ${!round ? 'square' : ''}`}>
            <Search color="#767676" size={16} />
            <input
                className='searchbar_input' placeholder='search free high resolution photos'
                onChange={(event) => setSearchTerm(event.target.value)}
                onBlur={() => history.push(`/s/photos/${searchTerm}`)}
            />
        </div>
    )
}
