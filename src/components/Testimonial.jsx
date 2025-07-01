import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonials = [
    {
        name: "Milos Vidic",
        title: "CEO @goatmarketing",
        platform: "Clutch",
        rating: 5,
        text: "“Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time.We also increased our website accessibility score and decreased thebounce rate.The service provider delivered the project on time and was highly efficient and organized. Additionally, the branding and logo design were exceptional, perfectly capturing our company's identity and leaving a lasting impression on our audience.”",
    },
    {
        name: "Borgar Erlendsson",
        title: "CEO @kozmoz",
        platform: "Clutch",
        rating: 5,
        text: "True professional. I enjoyed receiving feedback and new ideas during the design phase. Working with Handmade on our website design was an exceptional experience. As an architect, I needed a site that not only showcased our projects beautifully but also reflected. ",
    },
    {
        name: "Rasesh Seth",
        title: "CEO @nextyn",
        platform: "Upwork",
        rating: 5,
        text: "Vas was extremely ease to work with.He's a pro at Webflow and is always open to hearing you out and executing exactly the way you want. I'd definitely work with him again in the future. Working with Handmade on our website design was an exceptional experience. As an architect, I needed a site that not only showcased our projects beautifully but also reflected. ",
    },
    {
        name: "Goran Markovic",
        title: "Founder @viziya",
        platform: "Clutch",
        rating: 5,
        text: 'Working with Handmade on our website design was an exceptional experience. As an architect, I needed a site that not only showcased our projects beautifully but also reflected our unique design philosophy. Handmade delivered on all fronts.',
    },
    {
        name: "Jasper Zhang",
        title: "CEO @hyperbolic",
        platform: "Clutch",
        rating: 5,
        text: "Vasilije did an outstanding job designing our site. Highly skilled and responsive.",
    },
    {
        name: "Milos Vidic",
        title: "CEO @goatmarketing",
        platform: "Clutch",
        rating: 5,
        text: "Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time. The branding and logo design were exceptional.",
    },
    {
        name: "Chris Hjort",
        title: "PM @host",
        platform: "Clutch",
        rating: 5,
        text: "I highly recommend Vasilije. He is a hard working guy with great ideas for big or small projects. Very flexible and very fast. I'm very happy I found his profile and I'll definitely hire him again for another project!",
    },
    {
        name: "Rasesh Seth",
        title: "CEO @nextyn",
        platform: "Upwork",
        rating: 5,
        text: "Vas was extremely easy to work with. He's a pro at Webflow and always open to hearing you out. I'd definitely work with him again.",
    },
    {
        name: "Goran Markovic",
        title: "Founder @viziya",
        platform: "Clutch",
        rating: 5,
        text: "Working with Handmade was an exceptional experience. The site beautifully reflected our unique design philosophy.I highly recommend Vasilije.He is a hard working guy with great ideas for big or small projects.Very flexible and very fast.I'm very happy I found his profile and I'll definitely hire him again for another project!",
    },
]

export const Testimonial = () => {
    const desktopGroups = [];
    for (let i = 0; i < testimonials.length; i += 6) {
        desktopGroups.push(testimonials.slice(i, i + 6));
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="lg:py-20 px-4 md:px-12 lg:min-h-screen flex flex-col justify-center text-white">
            <div className="mb-12 text-center">
                <img src="public/assets/testimonial.svg" alt="testimonial icon" className="mx-auto" />
                <p className="font-extralight text-h3 md:text-h2 md:leading-15 mt-4">
                    Read what our clients are <br /> saying about us
                </p>
            </div>

            {/* Desktop - 3 column layout */}
            <div className="hidden lg:block w-full max-w-7xl mx-auto h-auto flex-grow">
                <div>
                    <Slider {...settings}>
                        {desktopGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="px-4 h-fit">
                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    {group.map((testimonial, idx) => (
                                        <TestimonialCard key={idx} testimonial={testimonial} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Mobile - Single column */}
            <div className="lg:hidden w-full lg:h-auto max-w-md md:max-w-2xl mx-auto flex-grow">
                <div>
                    <Slider {...settings}>
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="px-4 h-auto">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-primary2 border border-[#2a2a2a] rounded-2xl p-8 mb-4 flex flex-col h-fit">
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white">
                {testimonial.name[0]}
            </div>
            <div>
                <p className="font-medium text-h4">{testimonial.name}</p>
                <p className="text-sm text-gray-400 text-p">{testimonial.title}</p>
            </div>
        </div>
        <p className="text-base text-gray-400 leading-relaxed mb-6 flex-grow">"{testimonial.text}"</p>
        <div className="text-base font-semibold flex items-center gap-3">
            {testimonial.platform}
            <img src="public/assets/Container.svg" alt="" />
            <span className="text-gray-400">{testimonial.rating}.0</span>
        </div>
    </div>
);

