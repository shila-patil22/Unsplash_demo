import React, { useState } from 'react'
import { Database, Image } from 'react-feather'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PhotoOrientationColor } from '../PhotoOrientationColor'
import './style.css'

export const PhotosAndCollection = () => {
    const { photo } = useParams()
    const orientationItem = ['Landscap', 'Portrait', 'Square']
    const colorItem = ['Black and White', 'Tones']
    const [photoCollection, setphotoCollection] = useState(true)

    return (
        <div className='justify-content-between d-flex flex-nowrap border-bottom align-items-center p-2'>
            <div className='d-flex'>

                <div className="search_menu ms-5" onClick={() => setphotoCollection(true)}>
                    <Image className='me-2' color='#d1d1d1' width='18px' />
                    <Link to={`/s/photos/${photo}`} className='text-decoration-none link-secondary'>Photos 3.5k</Link>
                </div>
                <div className="search_menu ms-5" onClick={() => setphotoCollection(false)} >
                    <Database className='me-2' color='#d1d1d1' width='18px' />
                    <Link to={`/s/collections/${photo}`} className='text-decoration-none link-secondary' >Collection 9.8k</Link>
                </div>
            </div>
            <div className="search_menu ms-5" >
                {
                    photoCollection &&
                    <>
                        <PhotoOrientationColor title="Any Color" items={colorItem} />
                        <PhotoOrientationColor title="Any Orientation" items={orientationItem} />
                    </>
                }
            </div>

        </div>
    )
}