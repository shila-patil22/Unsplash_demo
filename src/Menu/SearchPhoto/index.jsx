import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CollectionImgs } from '../../common/CollectionImgs'
import { PhotoGallery } from '../../common/PhotoGallery'
import { PhotosAndCollection } from '../../common/PhotosAndCollection'
import { CustomPagination } from '../../common/CustomPagination'
import { useLazyGetUnsplashSearchPhotosQuery, useGetUnsplashnByNameQuery } from '../../Redux/reduxApiCalling'
import { TailSpin } from 'react-loader-spinner'
import './style.css'

export const SearchPhoto = ({ isPhoto }) => {

    const [currentPage, setcurrentPage] = useState(1);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const { photo } = useParams()
    const [dropdownParam, setdropdownParam] = useState({ query: photo })
    const { data: searchCollectionData, isLoading: isCollection } = useGetUnsplashnByNameQuery({ params: 'search/collections', query: photo })
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
                isPhoto ?
                    <>
                        {!isPhotodata && <CustomPagination
                            setcurrentPage={setcurrentPage}
                            currentPage={currentPage}
                            totalPages={searchPhotoData?.total_pages}
                            setdropdownParam={setdropdownParam}
                            dropdownParam={dropdownParam}
                            maxPageNumberLimit={maxPageNumberLimit}
                            setmaxPageNumberLimit={setmaxPageNumberLimit}
                            minPageNumberLimit={minPageNumberLimit}
                            setminPageNumberLimit={setminPageNumberLimit}
                        />}
                        <div className="photo-gallery">

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
                        </div>
                        {!isPhotodata && <CustomPagination
                            setcurrentPage={setcurrentPage}
                            currentPage={currentPage}
                            totalPages={searchPhotoData?.total_pages}
                            setdropdownParam={setdropdownParam}
                            dropdownParam={dropdownParam}
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
