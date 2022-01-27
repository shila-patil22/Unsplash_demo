import React, { useState } from 'react'
import { Image, Layers } from 'react-feather'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PhotoOrientationColor } from '../PhotoOrientationColor'
import './style.css'

export const PhotosAndCollection = ({ setdropdownParam, dropdownParam }) => {

    const [photoCollection, setphotoCollection] = useState(true)
    const [clearData, setClearData] = useState(false)
    const [clear, setClear] = useState(false)
    const clearState = () => {
        setClearData(true)
        setdropdownParam({ ...dropdownParam, orientation: '', order_by: '' })
    }

    const { photo } = useParams()
    const orientationItem = [{ label: '', value: 'Any Orientation' }, { label: 'landscape', value: 'Landscape' }, { label: 'portrait', value: 'Portrait' }, { label: 'squarish', value: 'Square' }]
    const colorItem = [{ label: 'relevant', value: 'Relevance' }, { label: 'latest', value: 'Newest' }]
    return (
        <div className='justify-content-between d-flex flex-lg-nowrap flex-wrap flex-sm-wrap flex-md-nowrap border-bottom align-items-center m-3'>
            <div className='d-flex'>
                <div className="search-menu " onClick={() => setphotoCollection(true)}>
                    <Image className='img-coll-icon' />
                    <Link to={`/s/photos/${photo}`} className='text-decoration-none link-secondary'>Photos 3.5k</Link>
                </div>
                <div className="search-menu " onClick={() => setphotoCollection(false)} >
                    <Layers className='img-coll-icon' />
                    <Link to={`/s/collections/${photo}`} className='text-decoration-none link-secondary'>Collection 9.8k</Link>
                </div>
            </div>
            <div className=" d-flex justify-content-end pb-3 ps-4" >
                {
                    photoCollection &&
                    <>
                        {clear && <div className='' style={{ margin: '0 10px', cursor: 'pointer' }} onClick={clearState}>Clear</div>}
                        <PhotoOrientationColor title="Any Orientation" items={orientationItem} setdropdownParam={setdropdownParam} dropdownParam={dropdownParam} setClear={setClear} clearState={setClearData} clearBtn={clearData} />
                        <PhotoOrientationColor title="Sort By" items={colorItem} setdropdownParam={setdropdownParam} dropdownParam={dropdownParam} setClear={setClear} clearState={setClearData} clearBtn={clearData} />
                    </>
                }
            </div>
        </div>
    )
}