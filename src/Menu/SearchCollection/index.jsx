import React from 'react'
import { useParams } from 'react-router-dom';
import { PhotosAndCollection } from '../../common/PhotosAndCollection';
import { useGetUnsplashSearchPhotosQuery } from '../../Redux/reduxApiCalling';

export const SearchCollection = () => {
    const { photo } = useParams()
    const { data: searchPhotoData } = useGetUnsplashSearchPhotosQuery(photo)
    return (
        <div>
            <PhotosAndCollection />
            <h1>{photo}</h1>
        </div>
    )
}
