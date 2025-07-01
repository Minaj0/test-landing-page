import React from 'react';

const icons = [
    '/assets/icon1.svg',
    '/assets/icon2.svg',
    '/assets/icon3.svg',
    '/assets/icon4.svg',
    '/assets/icon5.svg'
];

export const Footer = () => {
    return (
        <div className='mt-5 md:mt-40 bg-[url(/assets/bg.svg)] bg-no-repeat bg-top bg-cover '>
            <p className='text-h2 md:text-h1 md:leading-15 text-center font-extralight'>
                Need more clarity?<br />
                Get in touch!
            </p>

            <img
                src="/assets/bookdemo.svg"
                alt="Book a demo"
                className='mx-auto mt-8'
            />

            <div className='mt-20 container mx-auto px-4 py-8'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6 border-gray-700 pt-6 '>
                    <p className='text-sm text-gray-400'>© 2024 All Rights Reserved</p>
                    <div className='flex gap-4'>
                        {icons.map((icon, i) => (
                            <a key={i} href="#">
                                <img src={icon} alt={`icon-${i}`} className="hover:opacity-80 transition" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
