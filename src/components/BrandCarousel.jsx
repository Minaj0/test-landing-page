import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BrandCarousel = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false, 
        slidesToShow: 5,
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
                    slidesToShow: 1
                }
            }
        ]
    };

    const brands = [
        "dribble.svg",
        "awwrd.svg",
        "behance.svg",
        "cssdesing.svg",
    ];

    return (
        <div className="w-full mt-5 md:py-12">
            <p className="text-base md:text-p text-gray-500 text-center mb-10">
                As seen and loved on:
            </p>
            <div className="slider-container px-26">
                <Slider {...settings}>
                    {brands.map((src, i) => (
                        <div key={i} className="flex justify-center items-center">
                            <img
                                src={`public/assets/${src}`}
                                alt={`brand-${i}`}
                                className="w-28 md:w-32 opacity-80 hover:opacity-100 transition duration-300"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>
    );
};
