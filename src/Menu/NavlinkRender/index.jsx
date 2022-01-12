import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGetUnsplashnByNameQuery } from '../../Redux/reduxApiCalling';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    variableWidth: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                arrows: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
                arrows: false
            }
        }
    ]
};
export const NavlinkRender = () => {
    const { data } = useGetUnsplashnByNameQuery()

    return (
        <div className='navlink_menu_wrapper row flex-nowrap'>
            <div className="editorial border-end pe-3  ">
                <NavLink to="/" className="navlink_menu" >Editorial </NavLink>
            </div>
            <div className="all_menu_container">
                <Slider {...settings}>
                    {
                        data?.map((topicLink, i) => {
                            return (
                                <NavLink key={i} to={`/t/${topicLink.slug}`} className="navlink_menu">{topicLink.title}</NavLink>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}