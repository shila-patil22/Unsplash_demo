import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { PhotoGallery } from '../../common/PhotoGallery'
import { useGetUnsplashCollectionImgsQuery } from '../../Redux/reduxApiCalling'

export const CollectionPhotosDisplay = () => {
    const { id } = useParams()
    const location = useLocation()
    const { data: CollectionPhotos, isLoading } = useGetUnsplashCollectionImgsQuery(id)
    return (
        <>
            <h1 className='text-uppercase fw-bold w-100 text-center mb-4'>{location.state.state}</h1>
            <div className="photo_gallery">
                {
                    !isLoading && CollectionPhotos?.map((photos, i) => {
                        return (
                            <PhotoGallery key={i} imgurls={photos?.urls?.regular} />
                        )
                    })
                }
            </div>
        </>

    )
}
