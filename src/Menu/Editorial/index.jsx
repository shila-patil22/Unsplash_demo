import { Link } from 'react-router-dom'
import { PhotoGallery } from '../../common/PhotoGallery'
import { SearchBar } from '../../common/Searchbar'
import { useGetUnsplashHomePhotosQuery } from '../../Redux/reduxApiCalling'
import './style.css'

export const Editorial = () => {
    const { data: unsplashDataPhotos, isloading } = useGetUnsplashHomePhotosQuery()
    return (
        <>
            <div className="hero_img mb-5">
                <div className="hero_text">
                    <span className="hero_header">Unsplash</span>
                    <h1 className="hero_sub_header">The internet’s source of <Link to="#" className="trending_link" >freely-usable images.</Link></h1>
                    <p className="hero_body_text">Powered by creators everywhere.</p>
                    <SearchBar />
                    <div className="d-flex d-none d-md-flex">
                        <span>Trending:</span>
                        <ul>
                            <li className="d-inline"><Link to="#" className="trending_link">Flower</Link></li>
                            <li className="d-inline"><Link to="#" className="trending_link">Wallpapers</Link></li>
                            <li className="d-inline"><Link to="#" className="trending_link">Backgrounds</Link></li>
                            <li className="d-inline"><Link to="#" className="trending_link">Happy</Link></li>
                            <li className="d-inline"><Link to="#" className="trending_link">Love</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="photo_gallery">
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
