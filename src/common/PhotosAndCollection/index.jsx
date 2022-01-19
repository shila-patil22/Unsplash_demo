import React, { useState } from 'react'
import {  Image, Layers } from 'react-feather'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PhotoOrientationColor } from '../PhotoOrientationColor'
import './style.css'

export const PhotosAndCollection = ({ setdropdownParam, dropdownParam }) => {
    const [photoCollection, setphotoCollection] = useState(true)
    const { photo } = useParams()
    const orientationItem = [{ label: '', value: 'Any Orientation'},{ label: 'landscape', value: 'Landscape' }, { label: 'portrait', value: 'Portrait' }, { label: 'squarish', value: 'Square' }]
    const colorItem = [{ label: 'relevant', value: 'Relevance' }, { label: 'latest', value: 'Newest' }]
    return (
        <div className='justify-content-between d-flex flex-nowrap border-bottom align-items-center m-3'>
            <div className='d-flex'>
                <div className="search_menu ms-5" onClick={() => setphotoCollection(true)}>
                    <Image className='me-2' color='#d1d1d1' width='18px' />
                    <Link to={`/s/photos/${photo}`} className='text-decoration-none link-secondary'>Photos 3.5k</Link>
                </div>
                <div className="search_menu ms-5" onClick={() => setphotoCollection(false)} >
                    <Layers className='me-2' color='#d1d1d1' width='18px' />
                    <Link to={`/s/collections/${photo}`} className='text-decoration-none link-secondary'>Collection 9.8k</Link>
                </div>
            </div>
            <div className="mx-2" >
                {
                    photoCollection &&
                    <>
                        <PhotoOrientationColor title="Any Orientation" items={orientationItem} setdropdownParam={setdropdownParam} dropdownParam={dropdownParam} />
                        <PhotoOrientationColor title="Sort By" items={colorItem} setdropdownParam={setdropdownParam} dropdownParam={dropdownParam} />
                    </>
                }
            </div>
        </div>
    )
}