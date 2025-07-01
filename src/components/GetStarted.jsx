import React from 'react'

export const GetStarted = () => {
    return (
        <div className='text-center mt-5 flex flex-col w-full'>
            <img src="public/assets/Margin.svg" className='mx-auto' alt="" />
            <p className='text-h3 md:text-h2 text-center font-extralight md:leading-14'>Pay and get started <br /> the same day</p>
            <p className="text-base md:text-p text-center mt-3">
                No unnecessary bureaucracy. We focus on getting your ideas and <br />
                problems solved.
            </p>
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mt-10 px-4">
                <img
                    src="public/assets/get1.svg"
                    className="w-full md:w-[400px]"
                    alt="Image 1"
                />
                <img
                    src="public/assets/get2.svg"
                    className="w-full md:w-[400px]"
                    alt="Image 2"
                />
                <img
                    src="public/assets/get3.svg"
                    className="w-full md:w-[400px]"
                    alt="Image 3"
                />
            </div>

        </div>
    )
}
