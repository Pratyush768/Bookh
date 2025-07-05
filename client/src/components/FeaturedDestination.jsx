import React from 'react';
import { roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-[#f8f7f4] py-20">
            <div className="text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-playfair font-medium text-gray-800">
                    A Touch of Luxury, A World of Experience                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed font-light">
                    Whether nestled in the clouds or overlooking turquoise shores, our stays promise more than comfort — they offer an experience                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-16 w-full">
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}
            </div>

            <button
                onClick={() => {
                    navigate('/rooms');
                    scrollTo(0, 0);
                }}
                className="mt-16 px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 text-sm font-semibold rounded-full shadow hover:brightness-110 transition"
            >
                Your Next Stay Awaits
            </button>
        </div>
    );
};

export default FeaturedDestination;
