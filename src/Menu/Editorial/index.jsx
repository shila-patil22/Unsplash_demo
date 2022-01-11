import { Link } from 'react-router-dom'
import { SearchBar } from '../../common/Searchbar'
import './style.css'

export const Editorial = () => {
    return (
        <div>
            <div className="hero_img">
                <div className="hero_text">
                    <span className="hero_header">Unsplash</span>
                    <h1 className="hero_sub_header">The internet’s source of <Link className="trending_link" >freely-usable images.</Link></h1>
                    <p className="hero_body_text">Powered by creators everywhere.</p>
                    <SearchBar />
                    <div className="d-flex d-none d-md-flex">
                        <span>Trending:</span>
                        <ul>
                            <li className="d-inline"><Link className="trending_link">Flower</Link></li>
                            <li className="d-inline"><Link className="trending_link">Wallpapers</Link></li>
                            <li className="d-inline"><Link className="trending_link">Backgrounds</Link></li>
                            <li className="d-inline"><Link className="trending_link">Happy</Link></li>
                            <li className="d-inline"><Link className="trending_link">Love</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
