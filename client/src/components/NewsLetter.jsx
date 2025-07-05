import React, { useState } from 'react';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed with:', email);
        setSubmitted(true);
        setEmail('');
    };

    return (
        <section className="w-full bg-gradient-to-r from-[#faf8f3] to-[#f5f3ee] py-24 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48">
            <div className="flex flex-col md:flex-row items-center justify-between gap-14">
                {/* Left Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-[#2e2e2e] leading-tight">
                        Stay Inspired with <span className="text-amber-600">NobleNights</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-700 font-light leading-relaxed max-w-xl">
                        Be the first to know about luxury getaways, seasonal escapes, and exclusive member-only offers curated just for you.
                    </p>
                </div>

                {/* Right Form Content */}
                <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#e8e4d9]">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 border border-gray-300 bg-[#fefefe] px-5 py-3 rounded-md outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 text-sm shadow-sm"
                            />
                            <button
                                type="submit"
                                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-md shadow transition duration-200 text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    ) : (
                        <p className="text-green-600 font-medium text-lg mt-2 text-center">
                            🎉 You're on the list! Stay tuned for elegant escapes.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
