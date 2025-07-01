import React from 'react';

export const Cards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-10">

            {/* Video Card */}
            <div className="md:col-span-4">
                <video
                    src="https://videos.pexels.com/video-files/3191572/3191572-uhd_2560_1440_25fps.mp4"
                    autoPlay
                    controls
                    loop
                    className="rounded-3xl w-full h-[240px] md:h-[360px] object-cover"
                />
            </div>

            {/* Testimonial Card */}
            <div className="md:col-span-8 border border-[#313131] p-6 md:mb-4 lg:p-10 rounded-3xl bg-primary2 text-white relative flex flex-col justify-center">
                {/* Left Decorative Image */}
                <img
                    src="public/assets/image.svg"
                    className="hidden md:block absolute left-14 top-1/2 transform -translate-y-1/2"
                    alt=""
                />

                {/* Main Text */}
                <p className="text-base md:text-p lg:text-h4 text-center px-4 md:px-16 lg:px-20">
                    An absolute professional who consistently delivers exceptional work, <br /> even under the most demanding deadlines. I appreciated the insightful feedback and innovative ideas introduced throughout the design process, which greatly enhanced the final product.
                </p>

                {/* Right Decorative Image */}
                <img
                    src="public/assets/imageright.svg"
                    className="hidden md:block absolute right-14 top-1/2 transform -translate-y-1/2"
                    alt=""
                />

                {/* Signature */}
                <p className="mt-6 text-center text-base md:text-p lg:text-h4 text-gray-500">
                    Wade Warren Founder @Lorem ipsum
                </p>
            </div>

            {/* Full Width Design Team Section */}
            <div className="md:col-span-12 bg-[#141414] text-white p-6 md:p-12 rounded-3xl w-full">
                <div className="flex flex-col md:flex-row gap-10 justify-between items-start">

                    {/* Left Heading */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-extralight leading-12">
                            Your dedicated <br />
                            in-house design <br />
                            team
                        </h2>
                    </div>

                    {/* Right Description */}
                    <div className="md:w-1/2 flex flex-col justify-between gap-16">
                        <p className="text-base md:text-h4 text-justify text-gray-300">
                            We are a global collective of diverse designers and developers, partnering with brands of all scales. What distinguishes us is our dedication to crafting memorable, user-friendly, and captivating experiences — it's what we excel at. The projects we deliver combine creative vision with practical execution, resulting in solutions that are both distinctive and impactful.
                        </p>

                        <div className="flex items-center border-gray-600 relative">
                            <hr className='w-15 text-gray-500 absolute -left-7 transform rotate-90' />
                            <div>
                                <p className="text-h4 px-3">Lorem ipsum</p>
                                <p className="text-gray-500 text-p px-3">Founder and CEO</p>
                            </div>

                            <div className="ml-auto text-4xl">
                                <img
                                    src="public/assets/imageright.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
