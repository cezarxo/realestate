import { SectionHeading } from '@/components/helper/SectionHeading'
import { buildings } from '@/data/data'
import React from 'react'
import BuildingCard from './BuildingCard'

export default function BuildingFeature() {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className='w-[80%] mx-auto'>
            <SectionHeading heading='Explore Building Feature' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14'>
                {buildings.map((building,i)=>{
                    return <div key={building.id}
                    data-aos="fade-left"
                    data-aos-delay={`${i *150}`}
                    data-aos-anchor-placement="top-center"
                    >
                        <BuildingCard building={building}/>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}
