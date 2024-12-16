import { SectionHeading } from '@/components/helper/SectionHeading'
import { appartmentTypeData } from '@/data/data'
import React from 'react'
import { AptCard } from './AptCard'

export const Appartemt = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto'>
                <SectionHeading heading='Appartment Types' />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center'>
                    {appartmentTypeData.map((type,i) => {
                        return <div key={type.id}
                        data-aos="zoom-in"
                        data-aos-delay={`${i *150}`}
                        data-aos-anchor-placement="top-center"
                        >
                            <AptCard type={type}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
