import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CollectionImgs } from '../../common/CollectionImgs'
import { PhotoGallery } from '../../common/PhotoGallery'
import { PhotosAndCollection } from '../../common/PhotosAndCollection'
import { Pagination } from '../../common/Pagination'
import { useLazyGetUnsplashSearchPhotosQuery, useGetUnsplashRecordQuery } from '../../Redux/unsplashApi'
import { TailSpin } from 'react-loader-spinner'
import './style.css'

export const SearchPhoto = ({ isPhoto }) => {

    const [currentPage, setcurrentPage] = useState(1);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const { photo } = useParams()
    const [param, setParam] = useState({ query: photo })
    const { data: searchCollectionData, isLoading: isCollection } = useGetUnsplashRecordQuery({ entity: 'search/collections', query: photo })
    const [getData, { data: searchPhotoData, isLoading: isPhotodata }] = useLazyGetUnsplashSearchPhotosQuery(photo);

    useEffect(() => {
        getData(param)
    }, [param])

    useEffect(() => {
        setParam({ ...param, query: photo })
    }, [photo])
    return (
        <div>
            <PhotosAndCollection setParam={setParam} param={param} />
            <h1 className='text-capitalize w-75 mx-auto fw-bold'>{photo}</h1>
            {
                isPhoto ?
                    <>
                        {!isPhotodata && <Pagination
                            setcurrentPage={setcurrentPage}
                            currentPage={currentPage}
                            totalPages={searchPhotoData?.total_pages}
                            setParam={setParam}
                            param={param}
                            maxPageNumberLimit={maxPageNumberLimit}
                            setmaxPageNumberLimit={setmaxPageNumberLimit}
                            minPageNumberLimit={minPageNumberLimit}
                            setminPageNumberLimit={setminPageNumberLimit}
                        />}
                        <div className="photo-gallery">

                            {
                                !isPhotodata ? searchPhotoData?.results?.map((photos, i) => {
                                    return (
                                        <PhotoGallery key={i} imgurls={photos?.urls?.regular} username={photos?.user?.first_name} userProfile={photos?.user?.profile_image?.small} imgId={photos?.id} />
                                    )
                                }) : <TailSpin
                                    heigth="100"
                                    width="100"
                                    color='grey'
                                    arialLabel='loading'
                                />
                            }
                        </div>
                        {!isPhotodata && <Pagination
                            setcurrentPage={setcurrentPage}
                            currentPage={currentPage}
                            totalPages={searchPhotoData?.total_pages}
                            setParam={setParam}
                            param={param}
                            maxPageNumberLimit={maxPageNumberLimit}
                            setmaxPageNumberLimit={setmaxPageNumberLimit}
                            minPageNumberLimit={minPageNumberLimit}
                            setminPageNumberLimit={setminPageNumberLimit}
                        />}
                    </> : <div className="collection-photo-gallery ">
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
        </div>
    )
}
