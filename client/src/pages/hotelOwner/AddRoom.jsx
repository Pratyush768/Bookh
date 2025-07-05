import React, { useState } from 'react';
import { assets } from '../../assets/assets';

// Premium CheckBox Component (re-created for this file)
const CheckBox = ({ label, checked, onChange }) => {
    return (
        <label className="flex gap-3.5 items-center cursor-pointer group py-1.5">
            <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${checked ? 'bg-amber-600 border-amber-600' : 'bg-white border-gray-300 group-hover:border-amber-500'}`}>
                {checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            <span className={`text-sm select-none transition-colors ${checked ? 'text-gray-900' : 'text-gray-700'}`}>{label}</span>
        </label>
    );
};

const AddRoom = () => {
    const [images, setImages] = useState([null, null, null, null]);
    const [inputs, setInputs] = useState({
        roomType: '',
        pricePerNight: '',
        amenities: {
            'Free WiFi': false, 'Free Breakfast': false, 'Room Service': false,
            'Mountain View': false, 'Pool Access': false, 'Air Conditioning': false,
        }
    });

    const handleImageChange = (e, index) => {
        const newImages = [...images];
        newImages[index] = e.target.files[0];
        setImages(newImages);
    };

    return (
        <form className="max-w-4xl mx-auto">
            <div className='flex flex-col items-start text-left mb-12'>
                <h1 className='font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 font-bold'>
                    Add a New Room
                </h1>
                <p className='text-base text-gray-600 mt-3'>
                    Provide accurate room details, pricing, and amenities to attract more guests.
                </p>
            </div>

            {/* Form sections are now in styled cards */}
            <div className="space-y-8">
                {/* Image Upload Section */}
                <div className="bg-white border border-amber-200/60 rounded-2xl shadow-sm p-6">
                    <p className='text-lg font-semibold text-gray-800 mb-4'>Upload Room Images</p>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {images.map((image, index) => (
                            <label htmlFor={`roomImage${index}`} key={index} className="aspect-square flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-amber-500 transition-colors bg-stone-50 overflow-hidden">
                                {image ? (
                                    <img className='w-full h-full object-cover' src={URL.createObjectURL(image)} alt={`Room Upload ${index + 1}`} />
                                ) : (
                                    <img className='w-12 h-12 opacity-50' src={assets.uploadArea} alt="Upload Area" />
                                )}
                                <input type="file" accept='image/*' id={`roomImage${index}`} hidden onChange={e => handleImageChange(e, index)} />
                            </label>
                        ))}
                    </div>
                </div>

                {/* Room Details Section */}
                <div className="bg-white border border-amber-200/60 rounded-2xl shadow-sm p-6">
                    <p className='text-lg font-semibold text-gray-800 mb-4'>Room Details</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Room Type</label>
                            <div className="relative mt-1">
                                <select value={inputs.roomType} onChange={e => setInputs({ ...inputs, roomType: e.target.value })} className='appearance-none w-full bg-stone-50 rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition' required>
                                    <option value="" disabled>Select a Type</option>
                                    <option value="Single Bed">Single Bed</option>
                                    <option value="Double Bed">Double Bed</option>
                                    <option value="Deluxe Double Room">Deluxe Double Room</option>
                                    <option value="Executive Suite">Executive Suite</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='text-sm font-medium text-gray-700'>Price per night (₹)</label>
                            <input type="number" placeholder='e.g., 3999' className='w-full bg-stone-50 rounded-lg border border-gray-300 px-4 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition' value={inputs.pricePerNight} onChange={e => setInputs({ ...inputs, pricePerNight: e.target.value })} />
                        </div>
                    </div>
                </div>

                {/* Amenities Section */}
                <div className="bg-white border border-amber-200/60 rounded-2xl shadow-sm p-6">
                    <p className='text-lg font-semibold text-gray-800 mb-4'>Select Amenities</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2'>
                        {Object.keys(inputs.amenities).map((amenity) => (
                            <CheckBox
                                key={amenity}
                                label={amenity}
                                checked={inputs.amenities[amenity]}
                                onChange={() => setInputs(prev => ({ ...prev, amenities: { ...prev.amenities, [amenity]: !prev.amenities[amenity] } }))}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <button type="submit" className='w-full sm:w-auto bg-amber-600 hover:bg-amber-700 transition-all text-white font-bold py-3 px-10 rounded-lg cursor-pointer mt-8 shadow-md hover:shadow-lg transform hover:scale-105'>
                Add Room
            </button>
        </form>
    );
};

export default AddRoom;