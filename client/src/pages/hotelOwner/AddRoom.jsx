import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import Title from '../../components/Title';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const AddRoom = () => {
    const { axios, getToken } = useAppContext();

    const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null });
    const [loading, setLoading] = useState(false);

    const [inputs, setInputs] = useState({
        roomType: '',
        pricePerNight: 0,
        amenities: {
            'Free WiFi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false,
        },
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (
            !inputs.roomType ||
            !inputs.pricePerNight ||
            !Object.values(images).some((image) => image)
        ) {
            toast.error('Please fill in all the details');
            return;
        }
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('roomType', inputs.roomType);
            formData.append('pricePerNight', inputs.pricePerNight);

            const amenities = Object.keys(inputs.amenities).filter((key) => inputs.amenities[key]);
            formData.append('amenities', JSON.stringify(amenities));

            Object.keys(images).forEach((key) => {
                if (images[key]) formData.append('images', images[key]);
            });

            const { data } = await axios.post('/api/rooms/', formData, {
                headers: { Authorization: `Bearer ${await getToken()}` },
            });

            if (data.success) {
                toast.success(data.message);
                setInputs({
                    roomType: '',
                    pricePerNight: 0,
                    amenities: {
                        'Free WiFi': false,
                        'Free Breakfast': false,
                        'Room Service': false,
                        'Mountain View': false,
                        'Pool Access': false,
                    },
                });
                setImages({ 1: null, 2: null, 3: null, 4: null });
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            className="py-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FFFBF2] text-gray-800 font-inter"
        >
            <Title
                align="left"
                font="playfair"
                title="Add Room"
                subTitle="Fill in accurate room details, pricing, and amenities to elevate the guest experience and ensure premium visibility."
            />

            {/* Upload Area */}
            <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">Upload Room Images</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {Object.keys(images).map((key) => (
                        <label key={key} htmlFor={`roomImage${key}`} className="cursor-pointer relative group">
                            <img
                                src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
                                alt={`room-${key}`}
                                className="rounded-xl border border-gray-300 shadow-sm object-cover h-32 w-full transition-transform duration-300 group-hover:scale-105 bg-white"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                id={`roomImage${key}`}
                                onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })}
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Room Details */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 max-w-2xl">
                <div className="flex-1">
                    <label className="block text-base font-medium text-gray-700 mb-2">Room Type</label>
                    <select
                        value={inputs.roomType}
                        onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    >
                        <option value="">Select Room Type</option>
                        <option value="Single Bed">Single Bed</option>
                        <option value="Double Bed">Double Bed</option>
                        <option value="Luxury Room">Luxury Room</option>
                        <option value="Family Suite">Family Suite</option>
                    </select>
                </div>

                <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">Price per Night</label>
                    <input
                        type="number"
                        placeholder="₹0"
                        value={inputs.pricePerNight}
                        onChange={(e) => setInputs({ ...inputs, pricePerNight: e.target.value })}
                        className="w-32 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    />
                </div>
            </div>

            {/* Amenities */}
            <div className="mt-12 max-w-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
                    {Object.keys(inputs.amenities).map((amenity, index) => (
                        <label key={index} className="flex items-center gap-2 cursor-pointer hover:text-amber-700">
                            <input
                                type="checkbox"
                                checked={inputs.amenities[amenity]}
                                onChange={() =>
                                    setInputs({
                                        ...inputs,
                                        amenities: {
                                            ...inputs.amenities,
                                            [amenity]: !inputs.amenities[amenity],
                                        },
                                    })
                                }
                            />
                            {amenity}
                        </label>
                    ))}
                </div>
            </div>

            <button
                disabled={loading}
                className={`mt-12 px-8 py-2.5 rounded-full text-white font-semibold tracking-wide shadow-md transition-all duration-300 ${
                    loading
                        ? 'bg-amber-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:brightness-110'
                }`}
            >
                {loading ? 'Adding...' : 'Add Room'}
            </button>
        </form>
    );
};

export default AddRoom;
