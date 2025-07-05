import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets';
import StarRating from './StarRating';

const Testimonial = () => {
    return (
        <section className="bg-[#f9f8f4] px-6 md:px-16 lg:px-24 xl:px-32 py-20">
            {/* Section Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-playfair font-semibold text-gray-900 leading-tight tracking-tight">
                    Voices of Our Guests, <br /> Memories That Last
                </h2>
                <p className="mt-6 text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                    Hear from those who’ve stayed at <span className="font-semibold text-amber-700">NobleNights</span> —
                    their experiences speak louder than promises.
                </p>
                <div className="h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-pink-400 mt-8 rounded-full w-1/2 mx-auto" />
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:ring-2 hover:ring-amber-300/30 transition-all duration-300 ease-in-out flex flex-col"
                    >
                        {/* Header: Image + Name */}
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-sm"
                            />
                            <div>
                                <p className="text-xl font-semibold text-gray-800">{testimonial.name}</p>
                                <p className="text-base text-gray-500">{testimonial.address}</p>
                                <p className="text-sm text-green-600 mt-1">✔ Stayed in June 2025</p>
                            </div>
                        </div>

                        {/* Rating - now horizontal and spaced */}
                        <div className="mb-4 flex items-center space-x-1">
                            <StarRating rating={testimonial.rating} size={24} />
                        </div>

                        {/* Review Text - Larger and premium feel */}
                        <p className="text-gray-700 text-base leading-relaxed font-normal group-hover:text-gray-900 transition-colors">
                            {testimonial.review}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
