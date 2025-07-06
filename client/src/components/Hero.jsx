import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { cities } from '../assets/assets';

const Hero = () => {
    // 2. Add state to store the user's destination choice
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();

    // 3. Create a function to handle form submission
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the form from reloading the page
        if (destination) {
            // Navigate to the rooms page with the destination as a query parameter
            navigate(`/rooms?destination=${destination}`);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="relative flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/newhero.jpg')] bg-no-repeat bg-cover bg-center h-screen">
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 mt-24 max-w-3xl">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-20 bg-gradient-to-r from-white/20 to-amber-300/40" />
                        <p className="text-xs tracking-widest uppercase text-amber-300 font-medium">
                            Timeless Luxury Awaits
                        </p>
                    </div>
                    <h1 className="font-playfair text-5xl md:text-6xl font-light leading-tight bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-md">
                        Welcome to a Stay Beyond Imagination
                    </h1>
                    <p className="text-base leading-relaxed text-stone-200/80 font-light tracking-wide">
                        Elevate your travel with refined touches, warm hospitality, and serene surroundings designed to soothe the soul.
                    </p>
                </div>

                {/* 4. Connect the form to our new handler */}
                <form onSubmit={handleSearch} className="mt-10 bg-white/95 text-gray-700 rounded-lg px-6 py-5 shadow-lg flex flex-col md:flex-row flex-wrap gap-4 md:items-end">
                    <div className="flex-1 min-w-[160px]">
                        <label htmlFor="destinationInput" className="block text-sm font-medium mb-1">Destination</label>
                        <input
                            list="destinations"
                            id="destinationInput"
                            type="text"
                            // 5. Connect the input to our state
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400"
                            placeholder="Where to?"
                            required
                        />
                        <datalist id="destinations">
                            {cities.map((city, index) => (
                                <option value={city} key={index} />
                            ))}
                        </datalist>
                    </div>

                    {/* Other inputs remain the same... */}
                    <div className="flex-1 min-w-[140px]">
                        <label htmlFor="checkIn" className="block text-sm font-medium mb-1">Check-In</label>
                        <input id="checkIn" type="date" className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                    <div className="flex-1 min-w-[140px]">
                        <label htmlFor="checkOut" className="block text-sm font-medium mb-1">Check-Out</label>
                        <input id="checkOut" type="date" className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                    <div className="flex-1 min-w-[100px]">
                        <label htmlFor="guests" className="block text-sm font-medium mb-1">Guests</label>
                        <input min={1} max={4} id="guests" type="number" className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400" placeholder="2" />
                    </div>
                    <div className="min-w-[120px] w-full md:w-auto">
                        <button type="submit" className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold px-5 py-3 rounded-md transition shadow-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>Search</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hero;