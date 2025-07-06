import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const MyBookings = () => {
    const { axios, getToken, user } = useAppContext();
    const [bookings, setBookings] = useState([]);

    const fetchUserBookings = async () => {
        try {
            const { data } = await axios.get('/api/bookings/user', {
                headers: { Authorization: `Bearer ${await getToken()}` },
            });
            if (data.success) {
                setBookings(data.bookings);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handlePayment = async (bookingId) => {
        try {
            const { data } = await axios.post(
                '/api/bookings/stripe-payment',
                { bookingId },
                { headers: { Authorization: `Bearer ${await getToken()}` } }
            );
            if (data.success) {
                window.location.href = data.url;
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            fetchUserBookings();
        }
    }, [user]);

    return (
        <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FFFAF0] min-h-screen">
            <Title
                title="My Bookings"
                subTitle="Effortlessly manage your luxurious stays — view past, current, or upcoming reservations in one elegant dashboard."
                align="left"
            />

            <div className="max-w-6xl mt-10 w-full text-gray-800 space-y-6">
                <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base pb-3 text-[#9A6700] uppercase tracking-wide">
                    <div>Hotels</div>
                    <div>Date & Timings</div>
                    <div>Payment</div>
                </div>

                {bookings.map((booking) => (
                    <div
                        key={booking._id}
                        className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        {/* Hotel Info */}
                        <div className="flex flex-col md:flex-row gap-4 p-4">
                            <img
                                className="w-full md:w-44 h-36 object-cover rounded-xl shadow"
                                src={booking.room.images[0]}
                                alt="hotel-img"
                            />
                            <div className="flex flex-col justify-center gap-2">
                                <p className="font-playfair text-xl text-[#3B3B3B]">
                                    {booking.hotel.name}
                                    <span className="font-inter text-sm text-gray-500"> ({booking.room.roomType})</span>
                                </p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <img src={assets.locationIcon} alt="location-icon" />
                                    <span>{booking.hotel.address}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <img src={assets.guestsIcon} alt="guests-icon" />
                                    <span>Guests: {booking.guests}</span>
                                </div>
                                <p className="text-base font-medium text-[#9A6700]">Total: ₹{booking.totalPrice}</p>
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="flex flex-col justify-center items-start md:items-center md:flex-row gap-6 p-4 border-t md:border-t-0 md:border-l border-gray-200">
                            <div>
                                <p className="font-semibold text-gray-700">Check-In:</p>
                                <p className="text-sm text-gray-500">{new Date(booking.checkInDate).toDateString()}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Check-Out:</p>
                                <p className="text-sm text-gray-500">{new Date(booking.checkOutDate).toDateString()}</p>
                            </div>
                        </div>

                        {/* Payment Status */}
                        <div className="flex flex-col justify-center items-start md:items-center gap-4 p-4 border-t md:border-t-0 md:border-l border-gray-200">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`h-3 w-3 rounded-full ${
                                        booking.isPaid ? 'bg-green-500' : 'bg-red-500'
                                    }`}
                                ></div>
                                <p
                                    className={`text-sm font-medium ${
                                        booking.isPaid ? 'text-green-600' : 'text-red-600'
                                    }`}
                                >
                                    {booking.isPaid ? 'Paid' : 'Unpaid'}
                                </p>
                            </div>
                            {!booking.isPaid && (
                                <button
                                    onClick={() => handlePayment(booking._id)}
                                    className="px-5 py-2 text-sm text-white bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full hover:brightness-110 transition-all"
                                >
                                    Pay Now
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
