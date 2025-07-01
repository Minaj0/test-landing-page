import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Benefits', path: '/benefits' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'FAQ', path: '/faq' }
    ];

    return (
        <div className='container mx-auto flex justify-between items-center py-6 px-4 md:py-10'>
            {/* Logo with Link to home */}
            <Link to="/">
                <img src="/assets/LOGO.svg" alt="Logo" className='w-24 md:px-6 md:w-auto' />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:gap-6 lg:gap-10">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `hover:text-primary1 transition ${isActive ? 'text-primary1 font-p' : ''}`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            {/* Desktop CTA Button */}
            <Link
                to="/contact"
                className="hidden md:flex items-center gap-2  px-6 py-3"
            >
                <img src="/assets/Link.svg" alt="" />
            </Link>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-2xl z-50 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#141414]/95 z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `hover:text-primary1 transition ${isActive ? 'text-primary1 font-medium' : ''}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    {/* Mobile CTA Button */}
                    <Link
                        to="/contact"
                        className="mt-8 flex items-center gap-2px-8 py-4 rounded-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        <img src="/assets/Link.svg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};