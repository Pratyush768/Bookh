import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
);

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    // Determine if user is on homepage
    const isHome = location.pathname === '/';

    // Dynamic styles
    const navTextColor = isHome ? 'text-white' : 'text-black';
    const navBg = isHome ? '' : 'bg-white shadow-md';
    const linkHoverColor = isHome ? 'group-hover:text-amber-300' : 'group-hover:text-amber-600';
    const navBorder = isHome ? 'border-white/50' : 'border-black/20';
    const navBtnBg = isHome ? 'bg-white text-black hover:bg-slate-100' : 'bg-black text-white hover:bg-black/80';

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-300 ${navTextColor} ${navBg}`}>
                {/* Logo */}
                <Link to="/">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4.706" cy="16" r="4.706" />
                        <circle cx="16.001" cy="4.706" r="4.706" />
                        <circle cx="16.001" cy="27.294" r="4.706" />
                        <circle cx="27.294" cy="16" r="4.706" />
                    </svg>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-x-10">
                    {navLinks.map((link, i) => (
                        <Link to={link.path} key={i} className={`relative overflow-hidden h-6 group ${navTextColor}`}>
                            <span className={`block group-hover:-translate-y-full transition-transform duration-300`}>{link.name}</span>
                            <span className={`block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 ${linkHoverColor}`}>{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        className={`border ${navBorder} px-4 py-2 rounded-full text-sm font-medium transition hover:bg-opacity-10`}
                        onClick={() => navigate('/owner')}
                    >
                        Dashboard
                    </button>
                    {user ? (
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                            </UserButton.MenuItems>
                        </UserButton>
                    ) : (
                        <button
                            onClick={openSignIn}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${navBtnBg}`}
                        >
                            Login
                        </button>
                    )}
                </div>

                {/* Mobile menu toggle */}
                <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
                    <svg className={`w-6 h-6 ${navTextColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-2xl text-white z-50">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-7 right-7">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <Link to={link.path} key={i} onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">
                            {link.name}
                        </Link>
                    ))}

                    <div className="mt-8 flex flex-col items-center gap-6">
                        {user && (
                            <button
                                className="border border-white/50 hover:bg-white/10 px-6 py-2 rounded-full text-base font-medium transition"
                                onClick={() => navigate('/owner')}
                            >
                                Dashboard
                            </button>
                        )}
                        {user && (
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                                </UserButton.MenuItems>
                            </UserButton>
                        )}
                        {!user && (
                            <button onClick={openSignIn} className="bg-white text-black px-6 py-2 rounded-full text-base font-medium transition hover:bg-slate-100">
                                Login
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
