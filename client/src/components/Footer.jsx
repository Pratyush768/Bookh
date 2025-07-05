import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <footer className="bg-[#ece9e3] text-gray-600 pt-12 px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-wrap justify-between gap-12 md:gap-6 pb-10 border-b border-gray-300">

                {/* Left Column: Logo and Description */}
                <div className="max-w-80">
                    <img src={assets.Home} alt="logo" className="mb-5 h-9 opacity-90" />
                    <p className="text-sm leading-relaxed">
                        <strong className="text-gray-800">NobleNights</strong> offers a curated collection of the world’s most refined stays — where elegance meets comfort, and every journey is unforgettable.
                    </p>
                    <div className="flex items-center gap-4 mt-5">
                        <img src={assets.instagramIcon} alt="Instagram" className="w-5 hover:opacity-80" />
                        <img src={assets.facebookIcon} alt="Facebook" className="w-5 hover:opacity-80" />
                        <img src={assets.twitterIcon} alt="Twitter" className="w-5 hover:opacity-80" />
                        <img src={assets.linkendinIcon} alt="LinkedIn" className="w-5 hover:opacity-80" />
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <p className="font-playfair text-lg text-gray-800 mb-4">Company</p>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a href="#" className="hover:text-amber-600">About</a></li>
                        <li><a href="#" className="hover:text-amber-600">Careers</a></li>
                        <li><a href="#" className="hover:text-amber-600">Press</a></li>
                        <li><a href="#" className="hover:text-amber-600">Blog</a></li>
                        <li><a href="#" className="hover:text-amber-600">Partners</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <p className="font-playfair text-lg text-gray-800 mb-4">Support</p>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a href="#" className="hover:text-amber-600">Help Center</a></li>
                        <li><a href="#" className="hover:text-amber-600">Safety Info</a></li>
                        <li><a href="#" className="hover:text-amber-600">Cancellation</a></li>
                        <li><a href="#" className="hover:text-amber-600">Contact Us</a></li>
                        <li><a href="#" className="hover:text-amber-600">Accessibility</a></li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="max-w-80">
                    <p className="font-playfair text-lg text-gray-800 mb-4">Stay in the Know</p>
                    <p className="text-sm mb-4">
                        Join our mailing list for curated travel inspiration and private offers.
                    </p>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="bg-white rounded-l-md border border-gray-300 h-10 px-4 text-sm outline-none w-full"
                        />
                        <button className="bg-amber-600 hover:bg-amber-700 h-10 px-4 rounded-r-md text-white text-sm transition">
                            <img src={assets.arrowIcon} alt="arrow" className="w-4 invert" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between py-6 text-xs text-gray-500 mt-6">
                <p>© {new Date().getFullYear()} NobleNights. All rights reserved.</p>
                <ul className="flex items-center gap-4 mt-2 md:mt-0">
                    <li><a href="#" className="hover:text-amber-600">Privacy</a></li>
                    <li><a href="#" className="hover:text-amber-600">Terms</a></li>
                    <li><a href="#" className="hover:text-amber-600">Sitemap</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
