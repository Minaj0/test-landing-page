import React from 'react';

export const Benefits = () => {
    const benefits = [
        {
            src: 'src/assets/benefits1-Cbxg5-_c.png.svg',
            title: 'Fast turnaround',
            desc: 'Expect the first draft within 48–72 hours, from Monday to Saturday.',
        },
        {
            src: 'src/assets/benefits2-CSNz231D.png.svg',
            title: 'Unlimited requests',
            desc: 'Enjoy the freedom of unlimited designs, tailored to meet your every need.',
        },
        {
            src: 'src/assets/benefits3-BCFyD-SG.png.svg',
            title: 'Always in sync',
            desc: 'Stay in sync with real-time updates and seamless communication, all via Slack.',
        },
        {
            src: 'src/assets/benefits4-D4KR8jeb.png.svg',
            title: 'Pause or cancel anytime',
            desc: 'Flexibility at your fingertips—pause or cancel your subscription anytime.',
        },
        {
            src: 'src/assets/benefits5-BpgSICQ-.png.svg',
            title: 'Trello task management',
            desc: 'Expertise in crafting designs that not only captivate but also drive results.',
        },
        {
            src: 'src/assets/benefits6-6zv3TJ0F.png.svg',
            title: 'Worry free pricing',
            desc: 'Get all your design needs covered for just 2,150/month.',
        },
    ];

    return (
        <div className="mt-5 md:py-16 px-4 md:px-10 bg-black text-white">
            {/* Header */}
            <div className="text-center mb-12">
                <img src="src/assets/benefits.svg" alt="Benefits" className="mx-auto mb-4" />
                <p className="text-h3 md:text-h2 font-extralight leading-snug">
                    Unlock a world of design <br /> potential with us
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="m-3 text-left flex flex-col gap-4"
                    >
                        <img src={item.src} alt={item.title} className="rounded-xl w-full" />
                        <div>
                            <h3 className="text-lg md:text-xl font-medium mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
