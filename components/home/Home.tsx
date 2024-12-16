"use client"
import React, { useEffect } from 'react'
import { Hero } from './Hero/Hero'
import { Appartemt } from './Appartment/Appartemt'
import Properties from './Properties/Properties'
import { CityProperties } from './CityProperties/CityProperties'
import BuildingFeature from './BuildFeature/BuildingFeature'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import 'aos/dist/aos.css';
import Aos from 'aos'

export const HomePage = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import('aos')
            Aos.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: "top-bottom"
            })
        };
        initAOS()
    }, [])

    return (
        <div className='overflow-hidden'>
            <Hero />
            <Appartemt />
            <Properties />
            <CityProperties />
            <BuildingFeature />
            <Reviews />
            <Blog />
        </div>
    )
}
