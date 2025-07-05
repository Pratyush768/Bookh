import React from 'react';
import { assets, cities } from '../assets/assets';

// The component now accepts an `onClose` prop to handle closing the modal
const HotelReg = ({ onClose }) => {
    return (
        // 1. Added a backdrop-blur for a premium "frosted glass" effect
        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'>
            <form className='flex bg-white rounded-2xl max-w-4xl max-md:mx-4 shadow-xl shadow-amber-900/10'>
                {/* Left-side image */}
                <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-l-2xl object-cover hidden md:block'/>

                <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
                    {/* Close button with better styling and accessibility */}
                    <button type="button" onClick={onClose} className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 transition-colors">
                        <img src={assets.closeIcon} alt="close-icon" className='h-4 w-4 cursor-pointer'/>
                    </button>

                    {/* Title with premium typography */}
                    <p className='text-3xl font-serif text-gray-800 mt-6'>Register Your Hotel</p>

                    {/* 2. All inputs and selects are custom-styled with golden accents */}
                    {/* Hotel Name */}
                    <div className='w-full mt-6'>
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Hotel Name
                        </label>
                        <input id='name' type="text" placeholder="e.g., The Golden Sands" className="w-full bg-stone-50 rounded-lg border border-gray-300 px-4 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition" required/>
                    </div>
                    {/* Phone */}
                    <div className='w-full mt-4'>
                        <label htmlFor="contact" className="text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input id='contact' type="tel" placeholder="e.g., +91 98765 43210" className="w-full bg-stone-50 rounded-lg border border-gray-300 px-4 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition" required/>
                    </div>
                    {/* Address */}
                    <div className='w-full mt-4'>
                        <label htmlFor="address" className="text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input id='address' type="text" placeholder="Street, Area" className="w-full bg-stone-50 rounded-lg border border-gray-300 px-4 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition" required/>
                    </div>
                    {/* Select City Drop Down with custom arrow */}
                    <div className='w-full mt-4'>
                        <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
                        <div className="relative mt-1">
                            <select id="city" className='appearance-none w-full bg-stone-50 rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition' required>
                                <option value="" disabled selected>Select a City</option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>

                    {/* 3. Premium, golden-themed Register button */}
                    <button className='w-full bg-amber-600 hover:bg-amber-700 transition-all text-white font-bold py-3 rounded-lg cursor-pointer mt-8 shadow-md hover:shadow-lg transform hover:scale-105'>
                        Register
                    </button>
                </div>

            </form>
        </div>
    );
};

export default HotelReg;