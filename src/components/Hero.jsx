import React from 'react'
import { Cards } from './Cards'
import { BrandCarousel } from './BrandCarousel'
import { GetStarted } from './GetStarted'

export const Hero = () => {
    return (
        <div className='items-center flex flex-col justify-center container mx-auto'>
            {/* review */}
            <div className="rating">
                <p className='flex gap-2 items-center justify-center border-1 rounded-4xl mt-16 px-5 py-1 text-[#a6a6a6] bg-primary2 border-[#313131]'>5.0 <img src="public/assets/Container.svg" alt="" />11 reviews</p>
            </div>
            {/* heading */}
            <div className="heading text-h2 md:text-h1 text-center md:leading-20 mt-6">
                Partner with a Full-Service <br /> Design Team for All Your <br /> Creative Needs
            </div>
            {/* paragraph */}
            <div className="text-base md:text-p mt-6 text-center">
                Skip the hassle of finding the perfect full-time designer or studio
            </div>
            {/* button */}
            <img src="srpublicc/assets/connectUs.svg" className='mt-6' alt="" />
            {/* cards */}
            <Cards />
            <BrandCarousel />
            <GetStarted />
        </div>
    )
}
