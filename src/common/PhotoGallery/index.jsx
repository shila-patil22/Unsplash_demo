import React from 'react'
import  './style.css'

export const PhotoGallery = ({imgurls}) => {
    return (
        
        <div className='topic_photos_wrapper card col-lg-4 thumbnail col-sm-6 img-fluid'>
            <img src={imgurls} class="card-img-top" alt=''/>
        </div>
    )
}
