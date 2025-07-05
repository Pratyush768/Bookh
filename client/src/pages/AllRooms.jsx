import React, { useState, useEffect } from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';

// The CheckBox component is already using the amber accent color, so it fits perfectly.
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

// The RadioButton is also already using the amber accent.
const RadioButton = ({ label, checked, onChange }) => {
    return (
        <label className="flex gap-3.5 items-center cursor-pointer group py-1.5">
            <input type="radio" name="sortOption" checked={checked} onChange={onChange} className="hidden" />
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${checked ? 'border-amber-600' : 'border-gray-300 group-hover:border-amber-500'}`}>
                {checked && <div className="w-2.5 h-2.5 rounded-full bg-amber-600"></div>}
            </div>
            <span className={`text-sm select-none transition-colors ${checked ? 'text-gray-900' : 'text-gray-700'}`}>{label}</span>
        </label>
    );
};


const AllRooms = () => {
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);

    // State management for filters and sorting (functional)
    const [filteredRooms, setFilteredRooms] = useState(roomsDummyData);
    const [selectedRoomTypes, setSelectedRoomTypes] = useState({});
    const [selectedPriceRanges, setSelectedPriceRanges] = useState({});
    const [selectedSortOption, setSelectedSortOption] = useState('Newest First');

    const roomTypes = ["Single Bed", "Double Bed", "Deluxe Double Room", "Executive Suite"];
    const priceRanges = ['0 - 3000', '3000 - 6000', '6000 - 10000', '10000+'];
    const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

    // Handlers for state changes
    const handleRoomTypeChange = (label) => {
        setSelectedRoomTypes(prev => ({ ...prev, [label]: !prev[label] }));
    };
    const handlePriceRangeChange = (label) => {
        const range = label.replace('₹ ', '');
        setSelectedPriceRanges(prev => ({ ...prev, [range]: !prev[range] }));
    };
    const clearFilters = () => {
        setSelectedRoomTypes({});
        setSelectedPriceRanges({});
        setSelectedSortOption('Newest First');
    };

    // Effect to apply filters and sorting whenever selections change
    useEffect(() => {
        let tempRooms = [...roomsDummyData];
        const activeRoomTypes = Object.keys(selectedRoomTypes).filter(key => selectedRoomTypes[key]);
        if (activeRoomTypes.length > 0) {
            tempRooms = tempRooms.filter(room => activeRoomTypes.includes(room.roomType));
        }
        const activePriceRanges = Object.keys(selectedPriceRanges).filter(key => selectedPriceRanges[key]);
        if (activePriceRanges.length > 0) {
            tempRooms = tempRooms.filter(room => {
                return activePriceRanges.some(range => {
                    const [minStr, maxStr] = range.split(' - ');
                    const min = parseInt(minStr, 10);
                    const max = maxStr ? parseInt(maxStr, 10) : Infinity;
                    return room.pricePerNight >= min && (max === Infinity || room.pricePerNight < max);
                });
            });
        }
        switch (selectedSortOption) {
            case "Price Low to High":
                tempRooms.sort((a, b) => a.pricePerNight - b.pricePerNight);
                break;
            case "Price High to Low":
                tempRooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
                break;
            case "Newest First":
                tempRooms.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            default:
                break;
        }
        setFilteredRooms(tempRooms);
    }, [selectedRoomTypes, selectedPriceRanges, selectedSortOption]);

    return (
        // 1. A warm, cream-colored background for a golden feel
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 gap-10 bg-[#FFFBF2]'>
            {/* Main Content: Room Listings */}
            <div className='w-full lg:flex-1'>
                <div className='flex flex-col items-start text-left mb-8'>
                    {/* 2. Page title with a golden text gradient */}
                    <h1 className='font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 font-bold'>
                        Rooms & Suites
                    </h1>
                    <p className='text-base text-gray-600 mt-3 max-w-2xl'>Explore our collection of beautifully appointed rooms, each designed to provide the utmost in comfort and luxury.</p>
                </div>

                <div className="flex flex-col gap-6">
                    {filteredRooms.map((room) => (
                        // 3. Room cards with golden hover effects (border and shadow)
                        <div key={room._id} className='group bg-white flex flex-col md:flex-row items-start p-6 gap-8 border border-transparent rounded-2xl shadow-sm hover:shadow-xl hover:shadow-amber-900/10 hover:border-amber-300/50 transition-all duration-300'>
                            <div className="md:w-2/5 rounded-xl overflow-hidden">
                                <img onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0,0); }}
                                     src={room.images?.[0]} alt="hotel-img" title='View Room Details'
                                     className='w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105'/>
                            </div>
                            <div className='md:w-3/5 flex flex-col'>
                                <div className="flex items-center justify-between">
                                    <p className='text-amber-700 text-sm font-semibold tracking-wider uppercase'>{room.roomType}</p>
                                    {room.isAvailable ? (
                                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">Available</span>
                                    ) : (
                                        <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600 font-medium">Booked</span>
                                    )}
                                </div>
                                <p onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0,0); }}
                                   className='text-gray-900 text-3xl font-serif cursor-pointer mt-1 hover:text-amber-700 transition-colors'>{room.hotel.name}</p>
                                <div className='flex items-center mt-2'>
                                    <StarRating rating={4.5} />
                                    <p className='ml-3 text-sm text-gray-500'>200+ reviews</p>
                                </div>

                                <div className='flex flex-wrap items-center mt-5 mb-5 gap-3'>
                                    {/* 4. Amenity tags with a warm background */}
                                    {room.amenities.slice(0, 4).map((item, index) => (
                                        <div key={index} className='flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50'>
                                            <img src={facilityIcons?.[item]} alt={item} className='w-4 h-4' />
                                            <p className='text-xs text-amber-900/80'>{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 mt-auto pt-4 flex items-center justify-between">
                                    <p className='text-2xl font-semibold text-gray-800'>₹{room.pricePerNight.toLocaleString('en-IN')} <span className='text-base font-normal text-gray-500'>/ night</span></p>
                                    <button
                                        onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0,0); }}
                                        className="px-5 py-2.5 w-fit text-sm font-semibold bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* No results message */}
                {filteredRooms.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-2xl font-serif text-gray-700">No Rooms Found</p>
                        <p className="mt-2 text-gray-500">Try adjusting your filters to find the perfect stay.</p>
                        <button onClick={clearFilters} className="mt-6 px-5 py-2.5 text-sm font-semibold bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all">
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>

            {/* 5. Filters Sidebar with themed golden accents */}
            <aside className='w-full lg:w-80 lg:sticky lg:top-32 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg shadow-amber-900/5 border border-amber-300/30 p-1 lg:mt-24'>
                <div className="flex items-center justify-between px-5 py-4 border-b border-amber-200/60">
                    <p className='text-lg font-semibold text-gray-800'>Filters</p>
                    <div className='flex items-center gap-4'>
                        <button onClick={clearFilters} className='hidden lg:block text-xs font-semibold text-amber-700 hover:underline'>CLEAR ALL</button>
                        <button onClick={() => setOpenFilters(!openFilters)} className='lg:hidden text-xs font-semibold flex items-center gap-1 text-amber-700'>
                            {openFilters ? 'HIDE' : 'SHOW'}
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${openFilters ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`${openFilters ? 'max-h-[1000px] py-6' : "max-h-0"} lg:max-h-none lg:py-6 overflow-hidden transition-all duration-700 ease-in-out`}>
                    <div className='px-6 flex flex-col gap-4'>
                        <p className='font-semibold text-gray-800'>Room Type</p>
                        {roomTypes.map((room) => (
                            <CheckBox key={room} label={room} checked={!!selectedRoomTypes[room]} onChange={() => handleRoomTypeChange(room)} />
                        ))}
                    </div>
                    <div className='px-6 pt-6 flex flex-col gap-4'>
                        <p className='font-semibold text-gray-800'>Price Range (per night)</p>
                        {priceRanges.map((range) => (
                            <CheckBox key={range} label={`₹ ${range}`} checked={!!selectedPriceRanges[range]} onChange={() => handlePriceRangeChange(range)} />
                        ))}
                    </div>
                    <div className='px-6 pt-6 flex flex-col gap-4'>
                        <p className='font-semibold text-gray-800'>Sort By</p>
                        {sortOptions.map((option) => (
                            <RadioButton key={option} label={option} checked={selectedSortOption === option} onChange={() => setSelectedSortOption(option)} />
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default AllRooms;