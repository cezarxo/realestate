"use client"
import { userReviewData } from '@/data/data';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3,
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
export default function ReviewSlider() {
    return (
        <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive}  >
            {userReviewData.map((review) => {
                return <div key={review.id}>
                    {/* review component */}
                    <ReviewCard review={review} />
                </div>
            })}
        </Carousel>
    )
}
