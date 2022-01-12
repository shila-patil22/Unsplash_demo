import React from 'react'
import { useParams } from 'react-router-dom';
import { PhotoGallery } from '../../common/PhotoGallery';
import { ShowStatus } from '../../common/ShowStatus';
import { TopicDesc } from '../../common/TopicDesc';
import { useGetUnsplashTopicDescQuery, useGetUnsplashTopicPhotosQuery } from '../../Redux/reduxApiCalling';

export const Topics = () => {
    const { topics } = useParams()
    const { data: topicDesc, isLoading } = useGetUnsplashTopicDescQuery(topics)
    const { data: topicPhotos, isLoading: isPhotos } = useGetUnsplashTopicPhotosQuery(topics)
    // const getTopicPhotos=topicPhotos.map((photos)=>photos.urls.regular)
    console.log(topicDesc,"---------------");

    return (
        !isLoading ?
            <div>
                <div className="d-flex justify-content-between align-items-center w-75 p-3 mx-auto flex-sm-wrap flex-lg-nowrap flex-wrap fflex-column">

                    <TopicDesc title={topicDesc.title} description={topicDesc.description} />
                    {
                        topicDesc?.owners?.map((statusImgs)=>{
                            return(

                                <ShowStatus  statusImgs={statusImgs.profile_image.small} />
                            )
                        })
                    }
                </div>
                <div className="photo_gallery">

                    {
                        !isPhotos && topicPhotos.map((photos) => {
                            return (
                                <PhotoGallery imgurls={photos.urls.regular} />
                            )
                        })
                    }
                </div>
            </div> : 'loading....'
    )
}