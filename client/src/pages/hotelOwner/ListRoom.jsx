import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'

// A custom-styled toggle switch with the golden-amber theme
const AvailabilityToggle = ({ checked, onChange }) => {
    return (
        <label className='relative inline-flex items-center cursor-pointer'>
            <input type="checkbox" className='sr-only peer' checked={checked} onChange={onChange} />
            <div className="w-12 h-7 bg-gray-200 rounded-full peer peer-checked:bg-amber-600 transition-colors duration-300"></div>
            <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></span>
        </label>
    );
};

const ListRoom = () => {
    const [rooms, setRooms] = useState(roomsDummyData);

    const handleAvailabilityChange = (id) => {
        setRooms(prevRooms =>
            prevRooms.map(room =>
                room._id === id ? { ...room, isAvailable: !room.isAvailable } : room
            )
        );
    };

    return (
        <div>
            {/* 1. Replaced Title component for full styling control */}
            <div className='flex flex-col items-start text-left mb-12'>
                <h1 className='font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 font-bold'>
                    Room Listings
                </h1>
                <p className='text-base text-gray-600 mt-3 max-w-2xl'>
                    View, edit, or manage all listed rooms to keep your information up-to-date.
                </p>
            </div>

            {/* 2. Redesigned table container to be a premium card */}
            <div className='w-full bg-white rounded-2xl border border-amber-200/60 shadow-sm p-4'>
                <div className="overflow-x-auto">
                    <table className='w-full'>
                        {/* 3. Modern table header styling */}
                        <thead>
                        <tr>
                            <th className='p-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-amber-100'>Room Type</th>
                            <th className='p-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-amber-100 max-sm:hidden'>Amenities</th>
                            <th className='p-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-amber-100'>Price / night</th>
                            <th className='p-4 text-sm font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-amber-100 text-center'>Availability</th>
                        </tr>
                        </thead>

                        <tbody className='text-sm'>
                        {rooms.map((item) => (
                            <tr key={item._id} className="border-b border-gray-100 last:border-0">
                                <td className='p-4 text-gray-800 font-medium'>
                                    {item.roomType}
                                </td>
                                <td className='p-4 text-gray-600 max-sm:hidden'>
                                    {item.amenities.slice(0, 3).join(', ')}
                                </td>
                                <td className='p-4 text-gray-800 font-medium'>
                                    ₹{item.pricePerNight.toLocaleString('en-IN')}
                                </td>
                                <td className='p-4 text-center'>
                                    {/* 4. Themed custom toggle switch */}
                                    <AvailabilityToggle
                                        checked={item.isAvailable}
                                        onChange={() => handleAvailabilityChange(item._id)}
                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListRoom;