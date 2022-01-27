import { useParams } from 'react-router-dom';
import { PhotoGallery } from '../../common/PhotoGallery';
import { ShowStatus } from '../../common/ShowStatus';
import { TopicDesc } from '../../common/TopicDesc';
import { useGetUnsplashnByNameQuery } from '../../Redux/reduxApiCalling';
import './style.css'

export const Topics = () => {
    const { topics } = useParams()
    const { data: topicDesc, isLoading } = useGetUnsplashnByNameQuery({params:`topics/${topics}`})
    const { data: topicPhotos, isLoading: isPhotos } = useGetUnsplashnByNameQuery({params:`topics/${topics}/photos/`})

    return (
        !isLoading ?
            <div>
                <div className="d-flex justify-content-between align-items-center w-75 p-3 mx-auto flex-sm-wrap flex-lg-nowrap flex-wrap">
                    <TopicDesc title={topicDesc.title} description={topicDesc.description} />
                    <ShowStatus statusImgsData={topicDesc} />
                </div>
                <div className="photo-gallery">
                    {
                        !isPhotos && topicPhotos.map((photos, i) => {
                            return (
                                <PhotoGallery key={i} imgurls={photos.urls.regular} />
                            )
                        })
                    }
                </div>
            </div> : 'loading....'
    )
}