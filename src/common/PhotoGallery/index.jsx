import React from 'react'
import './style.css'

export const PhotoGallery = ({ imgurls }) => {
    return (

        <div className='topic_photos_wrapper img-fluid pb-3'>
            <img src={imgurls} className='w-100' alt='' />
        </div>
    )
}
