import React from 'react';
import { useAppContext } from '../context/AppContext';
import HotelCard from './HotelCard';

const FeaturedDestination = () => {
    const { rooms, navigate } = useAppContext();

    return rooms.length > 0 && (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 py-24 md:py-28 bg-[#FFFBF2]'>

            {/* Title Section */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 font-bold">
                    Curated Luxury Journeys
                </h2>
                <p className="mt-4 text-base text-gray-600">
                    Handpicked properties where luxury meets comfort, creating memorable experiences in every destination.
                </p>
            </div>

            {/* Hotel Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 w-full max-w-7xl'>
                {rooms.slice(0, 4).map((room, index) => (
                    <div
                        key={room._id}
                        className='rounded-2xl overflow-hidden bg-white transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl'
                    >
                        <HotelCard room={room} index={index} />
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <button
                onClick={() => { navigate('/rooms'); window.scrollTo(0, 0); }}
                className='mt-20 px-8 py-3 text-base font-semibold text-white bg-amber-600 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 ease-in-out transform hover:scale-105'
            >
                View All Destinations
            </button>
        </div>
    );
};

export default FeaturedDestination;
