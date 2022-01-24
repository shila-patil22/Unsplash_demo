import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CollectionImgs } from '../../common/CollectionImgs'
import { PhotoGallery } from '../../common/PhotoGallery'
import { PhotosAndCollection } from '../../common/PhotosAndCollection'
import { useLazyGetUnsplashSearchPhotosQuery, useGetUnsplashSearchCollectionQuery } from '../../Redux/reduxApiCalling'
import { TailSpin } from 'react-loader-spinner'
import { CustomPagination } from '../../common/CustomPagination'
import './style.css'

export const SearchPhoto = ({ isPhoto }) => {

    const { photo } = useParams()
    const [dropdownParam, setdropdownParam] = useState({ query: photo })
    const { data: searchCollectionData, isLoading: isCollection } = useGetUnsplashSearchCollectionQuery(photo)
    const [getData, { data: searchPhotoData, isLoading: isPhotodata }] = useLazyGetUnsplashSearchPhotosQuery(photo);

    useEffect(() => {
        getData(dropdownParam)
    }, [dropdownParam])
    useEffect(() => {
        setdropdownParam({ ...dropdownParam, query: photo })
    }, [photo])

    return (
        <div>
            <PhotosAndCollection setdropdownParam={setdropdownParam} dropdownParam={dropdownParam} />
            <h1 className='text-capitalize w-75 mx-auto fw-bold'>{photo}</h1>
            {
                isPhoto ? <div className="photo_gallery">
                    {
                        !isPhotodata ? searchPhotoData?.results?.map((photos, i) => {
                            return (
                                <PhotoGallery key={i} imgurls={photos?.urls?.regular} imgId={photos?.id} />
                            )
                        }) : <TailSpin
                            heigth="100"
                            width="100"
                            color='grey'
                            arialLabel='loading'
                        />
                    }
                </div> : <div className="collection_photo_gallery ">
                    {
                        !isCollection ? searchCollectionData?.results?.map((photos, i) => {
                            return (
                                <CollectionImgs key={i} collectionData={photos} />
                            )
                        }) : <TailSpin
                            heigth="100"
                            width="100"
                            color='grey'
                            arialLabel='loading'
                        />
                    }
                </div>
            }

            {console.log(dropdownParam, "****", !isPhotodata)}
            {!isPhotodata && <CustomPagination dataCount={searchPhotoData?.total} setdropdownParam={setdropdownParam} dropdownParam={dropdownParam} />}

        </div>
    )
}
