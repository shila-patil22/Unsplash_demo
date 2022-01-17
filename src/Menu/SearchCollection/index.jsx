import React from 'react'
import { useParams } from 'react-router-dom';
import { CollectionImgs } from '../../common/CollectionImgs';
import { PhotosAndCollection } from '../../common/PhotosAndCollection';
import { useGetUnsplashSearchCollectionQuery } from '../../Redux/reduxApiCalling';

export const SearchCollection = () => {
    const { photo } = useParams()
    const { data: searchCollectionData, isLoading } = useGetUnsplashSearchCollectionQuery(photo)
    return (
        <div>
            <PhotosAndCollection />
            <h1 className='text-capitalize w-75 mx-auto fw-bold'>{photo}</h1>
            <div className="photo_gallery">
                {
                    !isLoading && searchCollectionData?.results?.map((photos, i) => {
                        return (
                            <CollectionImgs key={i} imgurls={photos?.preview_photos} />
                        )
                    })
                }
            </div>
        </div>
    )
}
