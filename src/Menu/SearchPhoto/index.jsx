import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoGallery } from '../../common/PhotoGallery'
import { PhotosAndCollection } from '../../common/PhotosAndCollection'
import { useGetUnsplashSearchPhotosQuery } from '../../Redux/reduxApiCalling'

export const SearchPhoto = () => {
    const { photo } = useParams()
    const { data: searchPhotoData, isLoading } = useGetUnsplashSearchPhotosQuery(photo)

    return (
        <div>
            <PhotosAndCollection />
            <h1>{photo}</h1>
            <div className="photo_gallery">
                {
                    !isLoading && searchPhotoData?.results?.map((photos, i) => {
                        return (
                            <PhotoGallery key={i} imgurls={photos.urls.regular} />
                        )
                    })
                }
            </div>
        </div>
    )
}
