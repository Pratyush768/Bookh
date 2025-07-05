import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';
import hotellogo from '../assets/hotellogo.jpg';


const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const roomData = roomsDummyData.find(room => room._id === id);
        if (roomData) {
            setRoom(roomData);
            setMainImage(roomData.images[0]);
        }
    }, [id]);

    // Render nothing or a loading state until the room data is available
    if (!room) {
        return <div className="min-h-screen"></div>;
    }

    return (
        // 1. A warm, cream-colored background for a golden feel
        <div className='py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FFFBF2]'>

            {/* Page Header */}
            <div>
                <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                    {/* 2. Page title with a golden text gradient */}
                    <h1 className='text-3xl md:text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 font-bold'>
                        {room.hotel.name}
                    </h1>
                    <span className='font-sans text-sm text-gray-600 md:mt-2'>({room.roomType})</span>
                </div>
                <div className='flex items-center gap-4 mt-3'>
                    <div className='flex items-center gap-1'>
                        <StarRating rating={4.5} />
                        <p className='ml-2 text-sm text-gray-600'>200+ reviews</p>
                    </div>
                    <div className='flex items-center gap-1.5 text-gray-600 text-sm'>
                        <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
                        <span>{room.hotel.address}</span>
                    </div>
                </div>
            </div>

            {/* Room Images Gallery */}
            <div className='flex flex-col lg:flex-row mt-8 gap-4'>
                <div className='lg:w-3/5 w-full rounded-2xl overflow-hidden shadow-lg shadow-amber-900/10'>
                    <img src={mainImage} alt="Room Main" className='w-full h-full object-cover'/>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 lg:w-2/5 w-full'>
                    {room.images.map((image, index) => (
                        <img onClick={() => setMainImage(image)}
                             key={index} src={image} alt={`Room Thumbnail ${index + 1}`}
                             className={`w-full h-full object-cover rounded-xl cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg ${mainImage === image ? 'ring-4 ring-amber-500 shadow-xl' : 'opacity-70 hover:opacity-100'}`}/>
                    ))}
                </div>
            </div>

            {/* Main Content & Booking Form Section */}
            <div className="mt-12 flex flex-col lg:flex-row gap-12 lg:gap-16">

                {/* Left Column: Room Details */}
                <div className="lg:w-2/3">
                    <h2 className='text-3xl font-serif text-gray-800'>Experience Luxury Like Never Before</h2>
                    <div className='flex flex-wrap items-center mt-6 mb-8 gap-3'>
                        {room.amenities.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-50'>
                                <img src={facilityIcons?.[item]} alt={item} className='w-5 h-5'/>
                                <p className='text-sm text-amber-900/80'>{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className='border-t border-amber-200/60 pt-8 space-y-6'>
                        {roomCommonData.map((spec, index) => (
                            <div key={index} className='flex items-start gap-4'>
                                <div className="flex-shrink-0 bg-amber-100/70 p-2 rounded-full">
                                    <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6 h-6'/>
                                </div>
                                <div>
                                    <p className='text-base font-semibold text-gray-800'>{spec.title}</p>
                                    <p className='text-gray-600 text-sm'>{spec.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='border-t border-amber-200/60 my-12 py-8 text-gray-600 text-sm leading-relaxed'>
                        <p>{roomCommonData[0].description}</p>
                    </div>

                    <div className='flex items-center gap-5'>
                        <img
                            src={hotellogo}
                            alt="Host"
                            className='h-20 w-20 rounded-full border-4 border-amber-200'
                        />
                        <div>
                            <p className='text-xl font-semibold text-gray-800'>Hosted by {room.hotel.name}</p>
                            <p className="text-gray-600 text-sm mt-1">Luxury, comfort, and memories — all in one stay.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Booking Form */}
                <aside className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                    <form className='bg-white/80 backdrop-blur-md border border-amber-300/30 rounded-2xl shadow-xl shadow-amber-900/10 p-6 space-y-5'>
                        <p className='text-2xl font-semibold text-gray-800'>₹{room.pricePerNight.toLocaleString('en-IN')} <span className='text-base font-normal text-gray-500'>/ night</span></p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="checkInDate" className='text-sm font-medium text-gray-700'>Check-In</label>
                                <input type="date" id='checkInDate' className='w-full bg-stone-50 rounded-lg border border-gray-300 px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-amber-500' required/>
                            </div>
                            <div>
                                <label htmlFor="checkOutDate" className='text-sm font-medium text-gray-700'>Check-Out</label>
                                <input type="date" id='checkOutDate' className='w-full bg-stone-50 rounded-lg border border-gray-300 px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-amber-500' required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="guests" className='text-sm font-medium text-gray-700'>Guests</label>
                            <input type="number" id='guests' defaultValue="2" placeholder='2' className='w-full bg-stone-50 rounded-lg border border-gray-300 px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-amber-500' required/>
                        </div>

                        <button type='submit' className='w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105'>
                            Check Availability
                        </button>
                        <p className="text-xs text-center text-gray-500">You won't be charged yet</p>
                    </form>
                </aside>
            </div>
        </div>
    );
};

export default RoomDetails;