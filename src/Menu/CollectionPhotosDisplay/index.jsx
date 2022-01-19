import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoGallery } from '../../common/PhotoGallery'
import { useGetUnsplashCollectionImgsQuery } from '../../Redux/reduxApiCalling'

export const CollectionPhotosDisplay = () => {
    const { id } = useParams()
    const { data: CollectionPhotos, isLoading } = useGetUnsplashCollectionImgsQuery(id)
    return (
        <div className="photo_gallery">
            {
                !isLoading && CollectionPhotos?.map((photos, i) => {
                    return (
                        <PhotoGallery key={i} imgurls={photos?.urls?.regular} />
                    )
                })
            }
        </div>
    )
}
