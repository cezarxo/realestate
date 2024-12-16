import { SectionHeading } from '@/components/helper/SectionHeading'
import React from 'react'
import ReviewSlider from './ReviewSlider'

export default function Reviews() {
    return (
        <div className='pt-16 pb-16 bg-[#fef7f6]'>
            <div className='w-[80%] mx-auto'>
                <SectionHeading heading='Our Clients Reviews' />
                <div className='mt-14'>
                    {/* ReviewSlider */}
                    <ReviewSlider />
                </div>
            </div>
        </div>
    )
}
