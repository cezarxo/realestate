"use client"
import { cities } from '@/data/data';
import React from 'react'
import CityCard from './CityCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};
export const CitySlider = () => {
    return (
        <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive}  >
            {cities.map((city)=>{
                return <div key={city.id}>
                    {/* city slider card */}
                    <CityCard city={city}/>
                </div>
            })}
        </Carousel>
    )
}
