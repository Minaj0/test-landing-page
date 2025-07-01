import React from 'react'

const projects = [
    {
        src: 'public/assets/project2-8g0cod9l.jpg.svg',
        title: 'Slippery moneys – e-commerce platform for high risk industries',
    },
    {
        src: 'public/assets/project6-C2twDe5Z.jpg.svg',
        title: 'Hybrid capital – digital currency',
    },
    {
        src: 'public/assets/project3-IgW1Pkkw.jpg.svg',
        title: 'Betero – sports betting platform',
    },
    {
        src: 'public/assets/project5-DSLPbhiU.jpg.svg',
        title: 'Exec – employees financial wellness saas',
    },
    {
        src: 'public/assets/project1-DyFZYTNM.jpg.svg',
        title: 'Voltage – accessible clean energy startup',
    },
    {
        src: 'public/assets/project4-BhR40iZf.jpg.svg',
        title: 'Hyperbolic – a decentralized data transmission startup',
    },
  ];

export const Portfolio = () => {
    return (
        <div className='container mx-auto mt-5 md:mt-20 p-8'>
            <img
                src="public/assets/porfolio.svg"
                alt=""
                className='px-10'
            />
            <div className="headings md:flex justify-between px-10">
                <p className='text-h3 flex md:flex-row md:text-h2 font-extralight md:leading-15 mt-4'>Exceptional work <br />you deserve</p>
                <p className='text-base md:text-p flex items-end'>From tech startups to healthcare giants, e- <br />
                    commerce pioneers to edtech, we've left our <br />
                    mark on diverse domains</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10 bg-black">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative rounded-2xl overflow-hidden group"
                    >
                        <img
                            src={project.src}
                            alt={project.title}
                            className="object-cover group-hover:scale-105 transition-transform duration-500 w-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white px-4 text-p sm:text-h4">{project.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="public/assets/seework.svg"
                alt=""
                className='mx-auto'
            />
        </div>
    )
}
