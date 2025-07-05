import React from 'react';
import Title from './Title';
import { assets, exclusiveOffers } from '../assets/assets';

// Updated Badge mappings
const badgeMap = {
    1: '🌴 Trending',
    2: '❤️ Couples Choice',
    3: '⭐ Staff Pick',
};

const badgeColors = {
    '🌴 Trending': 'bg-emerald-600',
    '❤️ Couples Choice': 'bg-rose-500',
    '⭐ Staff Pick': 'bg-indigo-600',
};

const ExclusiveOffers = () => {
    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-32 bg-gradient-to-b from-[#fffdf6] to-[#f4f4f9]">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <Title
                    align="left"
                    title="Exclusive Offers"
                    subTitle="Curated getaways with luxurious extras — only for a limited time."
                />
                <button className="group flex items-center gap-2 font-medium cursor-pointer text-gray-700 hover:text-amber-600 max-md:mt-12 transition">
                    View All Offers
                    <img
                        src={assets.arrowIcon}
                        alt="arrow-icon"
                        className="group-hover:translate-x-1 transition-all w-4"
                    />
                </button>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
                {exclusiveOffers.map((item) => {
                    const badge = badgeMap[item._id % 3 === 0 ? 3 : item._id];
                    const badgeClass = badgeColors[badge] || 'bg-amber-500';

                    return (
                        <div
                            key={item._id}
                            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            {/* Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

                            {/* Content */}
                            <div className="relative z-20 p-6 h-[400px] flex flex-col justify-between text-white">
                                <div>
                                    <span
                                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full shadow ${badgeClass}`}
                                    >
                                        {badge}
                                    </span>
                                    <h3 className="text-2xl font-playfair font-medium mt-4">{item.title}</h3>
                                    <p className="text-sm mt-2 text-white/90 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-white/70 mt-2">Expires {item.expiryDate}</p>
                                    <button className="mt-3 flex items-center gap-2 font-medium text-sm text-white hover:text-amber-300 transition">
                                        View Offer
                                        <img
                                            className="invert group-hover:translate-x-1 transition-all w-4"
                                            src={assets.arrowIcon}
                                            alt="arrow-icon"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ExclusiveOffers;
