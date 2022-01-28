import { Link } from 'react-router-dom'
import { PhotoGallery } from '../../common/PhotoGallery'
import { SearchBar } from '../../common/Searchbar'
import { useGetUnsplashRecordQuery } from '../../Redux/unsplashApi'
import './style.css'

export const Editorial = () => {
    const { data: unsplashDataPhotos, isloading } = useGetUnsplashRecordQuery({ entity: 'photos' })
    return (
        <>
            <div className="hero-img mb-5">
                <div className="hero-text">
                    <span className="hero-header">Unsplash</span>
                    <h1 className="hero-sub-header">The internet’s source of <Link to="#" className="trending-link" >freely-usable images.</Link></h1>
                    <p className="hero-body-text">Powered by creators everywhere.</p>
                    <SearchBar />
                    <div className="d-flex d-none d-md-flex">
                        <span>Trending:</span>
                        <ul>
                            <li className="d-inline"><Link to="#" className="trending-link">Flower</Link></li>
                            <li className="d-inline"><Link to="#" className="trending-link">Wallpapers</Link></li>
                            <li className="d-inline"><Link to="#" className="trending-link">Backgrounds</Link></li>
                            <li className="d-inline"><Link to="#" className="trending-link">Happy</Link></li>
                            <li className="d-inline"><Link to="#" className="trending-link">Love</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="photo-gallery">
                {
                    !isloading && unsplashDataPhotos?.map((photos, i) => {
                        return (
                            <PhotoGallery key={i} imgurls={photos.urls.regular} />
                        )
                    })
                }
            </div>
        </>
    )
}
