import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqItems = [
    "Is it really unlimited?",
    "Why wouldn't I just hire a freelancer?",
    "Why wouldn't I just hire a full-time designer?",
    "Can I pause, renew or cancel at any time?",
    "Are there any contracts?",
    "How do we communicate?",
    "What if I only have one design task?",
    "What is an active task?",
    "Who are the designers?",
    "How many designs can be done in a single month?",
    "Are there any refunds if I don't like the designs?",
];

export const Insight = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='mt-5 md:mt-20'>
            <img
                src="/assets/insight.svg"
                alt=""
                className='mx-auto'
            />
            <p href="" className="text-h3 md:text-h2 font-extralight md:leading-15 text-center mt-4">
                Frequently asked <br /> questions
            </p>

            <section className="max-w-3xl mx-auto px-4 py-16">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-primary2 border border-gray-800 text-white rounded-xl mb-3"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full text-left p-5 flex items-center justify-between"
                        >
                            <span className="text-p md:text-h4 font-normal">{item}</span>
                            <span className="text-gray-400 text-sm">
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </button>

                        {/* Optional content */}
                        {openIndex === index && (
                            <div className="px-5 text-p text-gray-400">
                               FAQ Model!
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    )
}
