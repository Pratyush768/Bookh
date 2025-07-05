import React, { useState } from 'react';
import { assets, userBookingsDummyData } from '../assets/assets';

const MyBookings = () => {
    const [bookings, setBookings] = useState(userBookingsDummyData);

    return (
        // 1. A warm, cream-colored background for a golden feel
        <div className='py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FFFBF2] min-h-screen'>

            {/* Page Header */}
            <div className='flex flex-col items-start text-left mb-12 max-w-7xl mx-auto'>
                {/* 2. Page title with a golden text gradient */}
                <h1 className='font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 font-bold'>
                    My Bookings
                </h1>
                <p className='text-base text-gray-600 mt-3 max-w-2xl'>
                    Easily manage your past, current, and upcoming reservations in one place.
                </p>
            </div>

            {/* Booking Cards List */}
            <div className='max-w-7xl mx-auto w-full flex flex-col gap-6'>

                {/* Optional: Add a header for desktop view if desired */}
                {/* <div className='hidden md:grid md:grid-cols-[2fr_1fr_1fr] ..."> ... </div> */}

                {bookings.map((booking) => (
                    // 3. Each booking is now a self-contained, beautifully styled card
                    <div key={booking._id} className='group bg-white flex flex-col md:flex-row items-start p-6 gap-6 border border-transparent rounded-2xl shadow-sm hover:shadow-xl hover:shadow-amber-900/10 hover:border-amber-300/50 transition-all duration-300'>

                        {/* Column 1: Hotel & Room Details */}
                        <div className='flex-1 flex flex-col md:flex-row gap-6'>
                            <img src={booking.room.images[0]} alt="hotel-img" className='w-full md:w-44 h-48 md:h-full rounded-xl shadow object-cover'/>
                            <div className='flex flex-col gap-1.5'>
                                <p className='font-serif text-2xl text-gray-800 hover:text-amber-700 transition-colors cursor-pointer'>{booking.hotel.name}
                                    <span className='font-sans text-sm text-gray-600'> ({booking.room.roomType})</span>
                                </p>
                                <div className='flex items-center gap-1.5 text-sm text-gray-500 mt-1'>
                                    <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4"/>
                                    <span>{booking.hotel.address}</span>
                                </div>
                                <div className='flex items-center gap-1.5 text-sm text-gray-500'>
                                    <img src={assets.guestsIcon} alt="guests-icon" className="w-4 h-4"/>
                                    <span>Guests: {booking.guests}</span>
                                </div>
                                <p className='text-lg font-semibold text-amber-800 mt-3'>
                                    Total: ₹{booking.totalPrice.toLocaleString('en-IN')}
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Dates & Payment */}
                        <div className="md:border-l border-gray-200/80 md:pl-6 flex flex-col justify-between h-full gap-4 w-full md:w-auto">
                            <div className='flex md:flex-col gap-6'>
                                <div>
                                    <p className="font-semibold text-gray-700">Check-In:</p>
                                    <p className="text-gray-500 text-sm">
                                        {new Date(booking.checkInDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">Check-Out:</p>
                                    <p className="text-gray-500 text-sm">
                                        {new Date(booking.checkOutDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col items-start pt-3'>
                                <div className='flex items-center gap-2'>
                                    <div className={`h-2.5 w-2.5 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                                    <p className="text-sm font-semibold">
                                        Payment: <span className={booking.isPaid ? "text-green-600" : "text-red-600"}>{booking.isPaid ? "Paid" : "Pending"}</span>
                                    </p>
                                </div>
                                {!booking.isPaid && (
                                    // 4. Premium "Pay Now" button
                                    <button className='w-full md:w-auto mt-4 px-6 py-2 text-sm font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105'>
                                        Pay Now
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {bookings.length === 0 && (
                <div className="text-center py-20 max-w-7xl mx-auto">
                    <p className="text-2xl font-serif text-gray-700">No Bookings Yet</p>
                    <p className="mt-2 text-gray-500">When you book a stay, your reservations will appear here.</p>
                </div>
            )}
        </div>
    );
};

export default MyBookings;