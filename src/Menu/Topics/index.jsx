import { useParams } from 'react-router-dom';
import { PhotoGallery } from '../../common/PhotoGallery';
import { TopicDesc } from '../../common/TopicDesc';
import { TopicStatus } from '../../common/TopicStatus';
import { useGetUnsplashRecordQuery } from '../../Redux/unsplashApi';
import './style.css'

export const Topics = () => {
    const { topics } = useParams()
    const { data: topicDesc, isLoading } = useGetUnsplashRecordQuery({ entity: `topics/${topics}` })
    const { data: topicPhotos, isLoading: isPhotos } = useGetUnsplashRecordQuery({ entity: `topics/${topics}/photos/` })

    return (
        !isLoading ?
            <div>
                <div className="d-flex justify-content-center align-items-center w-75 p-3 mx-auto flex-sm-wrap flex-lg-nowrap flex-wrap">
                    <TopicDesc title={topicDesc.title} description={topicDesc.description} />
                    <TopicStatus statusImgsData={topicDesc} />
                </div>
                <div className="photo-gallery">
                    {
                        !isPhotos && topicPhotos.map((photos, i) => {
                            return (
                                <PhotoGallery key={i} imgurls={photos.urls.regular} username={photos?.user?.first_name} userProfile={photos?.user?.profile_image?.small} />
                            )
                        })
                    }
                </div>
            </div> : 'loading....'
    )
}