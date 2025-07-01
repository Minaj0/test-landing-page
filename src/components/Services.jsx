import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Services = () => {
    const settings1 = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    const settings2 = {
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    const services = [
        'graphicdesign.svg',
        'logodesign.svg',
        'branding.svg',
        'uiux.svg'
    ];

    return (
        <div className='mt-3 md:py-16 text-center w-[60%] md:w-[45%] mx-auto'>
            <img
                src="src/assets/services.svg"
                alt=""
                className='mx-auto'
            />
            <p className="text-h3 md:text-h2 md:leading-15 font-extralight mt-3">
                All you want, <br /> delivered on time
            </p>
            <div className="slider-container mt-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <Slider {...settings1}>
                        {services.map((src, i) => (
                            <div key={i}>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={`src/assets/${src}`}
                                        alt={`brand-${i}`}
                                        className=" mt-6 opacity-80 p-2 rounded-2xl hover:opacity-100 transition duration-300"
                                    />
                                </div>
                            </div>

                        ))}
                    </Slider>
                </div>
                <div className="slider-container max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    
                    <Slider {...settings2}>
                        {services.map((src, i) => (
                            <div key={i}>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={`src/assets/${src}`}
                                        alt={`brand-${i}`}
                                        className="p-2 opacity-80 rounded-2xl hover:opacity-100 transition duration-300"
                                    />
                                </div>
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>
    )
}
