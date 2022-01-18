import React from 'react'
import './style.css'

export const CollectionImgs = ({ imgurls }) => {
    return (

        <div className='photos_wrapper pb-3'>
            {
                imgurls?.map((img, id) => id < 3 ? <img className={`index-${id}`} src={img?.urls?.regular} alt='' /> : '')
            }
        </div>
    )
}
