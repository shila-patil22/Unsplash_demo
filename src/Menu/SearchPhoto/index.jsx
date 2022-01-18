import React from 'react'
import { useParams } from 'react-router-dom'
import { CollectionImgs } from '../../common/CollectionImgs'
import { PhotoGallery } from '../../common/PhotoGallery'
import { PhotosAndCollection } from '../../common/PhotosAndCollection'
import { useGetUnsplashSearchPhotosQuery } from '../../Redux/reduxApiCalling'
import { useGetUnsplashSearchCollectionQuery } from '../../Redux/reduxApiCalling';


export const SearchPhoto = ({ type }) => {
    const { photo } = useParams()
    const { data: searchPhotoData, isLoading: isPhoto } = useGetUnsplashSearchPhotosQuery(photo)
    const { data: searchCollectionData, isLoading: isCollection } = useGetUnsplashSearchCollectionQuery(photo)
    console.log(searchCollectionData, "searchCollectionData");

    return (
        <div>
            <PhotosAndCollection />
            <h1 className='text-capitalize w-75 mx-auto fw-bold'>{photo}</h1>
            {
                type ? <div className="photo_gallery">
                    {
                        !isPhoto && searchPhotoData?.results?.map((photos, i) => {
                            return (
                                <PhotoGallery key={i} imgurls={photos.urls.regular} />
                            )
                        })
                    }
                </div> : <div className="photo_gallery">
                    {
                        !isCollection && searchCollectionData?.results?.map((photos, i) => {
                            return (
                                <CollectionImgs key={i} imgurls={photos?.preview_photos} />
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}
