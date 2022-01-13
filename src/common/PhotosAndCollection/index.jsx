import React from 'react'
import { Database, Image } from 'react-feather'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './style.css'

export const PhotosAndCollection = () => {
    const { photo } = useParams()
    // console.log(photo, "-------------param-----------");
    // console.log(photosAndCollection, "photosAndCollection");

    return (
        <div className='search_menu_wrapper d-flex flex-nowrap border-bottom '>
            <div className="search_menu d-flex ms-5">
                <Image className='me-2' color='#d1d1d1' width='18px' />
                <Link to={`/s/photos/${photo}`} >Photos 3.5k</Link>
            </div>
            <div className="search_menu d-flex ms-5">
                <Database className='me-2' color='#d1d1d1' width='18px' />
                <Link to={`/s/collections/${photo}`} >Collection 9.8k</Link>
            </div>
        </div>
    )
}