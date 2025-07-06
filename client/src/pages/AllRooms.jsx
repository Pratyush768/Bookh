import { useState, useMemo } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import StarRating from '../components/StarRating';
import { useSearchParams } from 'react-router-dom';

const CheckBox = ({ label, selected = true, onChange = () => {} }) => (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
        <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
        <span className="font-light select-none">{label}</span>
    </label>
);

const RadioButton = ({ label, selected = true, onChange = () => {} }) => (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
        <input type="radio" name="sortOption" checked={selected} onChange={() => onChange(label)} />
        <span className="font-light select-none">{label}</span>
    </label>
);

const AllRooms = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { facilityIcons, navigate, rooms } = useAppContext();
    const [openFilters, setOpenFilters] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        roomType: [],
        priceRange: [],
    });
    const [selectedSort, setSelectedSort] = useState('');

    const roomTypes = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'];
    const priceRanges = ['0 to 500', '500 to 1000', '1000 to 2000', '2000 to 3000'];
    const sortOptions = ['Price Low to High', 'Price High to Low', 'Newest First'];

    const handleFilterChange = (checked, value, type) => {
        setSelectedFilters((prev) => {
            const updated = { ...prev };
            if (checked) {
                updated[type].push(value);
            } else {
                updated[type] = updated[type].filter((item) => item !== value);
            }
            return updated;
        });
    };

    const handleSortChange = (option) => {
        setSelectedSort(option);
    };

    const matchesRoomType = (room) =>
        selectedFilters.roomType.length === 0 || selectedFilters.roomType.includes(room.roomType);

    const matchesPriceRange = (room) =>
        selectedFilters.priceRange.length === 0 ||
        selectedFilters.priceRange.some((range) => {
            const [min, max] = range.split(' to ').map(Number);
            return room.pricePerNight >= min && room.pricePerNight <= max;
        });

    const sortRooms = (a, b) => {
        if (selectedSort === 'Price Low to High') return a.pricePerNight - b.pricePerNight;
        if (selectedSort === 'Price High to Low') return b.pricePerNight - a.pricePerNight;
        if (selectedSort === 'Newest First') return new Date(b.createdAt) - new Date(a.createdAt);
        return 0;
    };

    const filterDestination = (room) => {
        const destination = searchParams.get('destination');
        if (!destination) return true;
        return room.hotel.city.toLowerCase().includes(destination.toLowerCase());
    };

    const filteredRooms = useMemo(
        () =>
            rooms
                .filter((room) => matchesRoomType(room) && matchesPriceRange(room) && filterDestination(room))
                .sort(sortRooms),
        [rooms, selectedFilters, selectedSort, searchParams]
    );

    const clearFilters = () => {
        setSelectedFilters({ roomType: [], priceRange: [] });
        setSelectedSort('');
        setSearchParams({});
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FFFBF2]">
            {/* Room Cards Section */}
            <div className="lg:mr-10 w-full">
                <div className="flex flex-col items-start text-left mb-6">
                    <h1 className="font-playfair text-4xl md:text-[40px] bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 text-transparent bg-clip-text font-bold">
                        Signature Luxury Stays
                    </h1>
                    <p className="text-sm md:text-base text-gray-700 mt-2 max-w-174">
                        Discover a handpicked selection of opulent accommodations where timeless elegance meets modern indulgence. Let every stay become an exquisite memory.
                    </p>
                </div>
                {filteredRooms.map((room, index) => (
                    <div
                        key={room._id}
                        className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white rounded-xl hover:bg-[#fffdf6] mb-8"
                    >
                        <img
                            title="View Room Details"
                            onClick={() => {
                                navigate(`/rooms/${room._id}`);
                                scrollTo(0, 0);
                            }}
                            src={room.images[0]}
                            alt="hotel-img"
                            className="max-h-65 md:w-1/2 rounded-xl shadow-xl object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                        />
                        <div className="md:w-1/2 flex flex-col gap-2">
                            <p className="text-gray-500">{room.hotel.city}</p>
                            <p
                                onClick={() => {
                                    navigate(`/rooms/${room._id}`);
                                    scrollTo(0, 0);
                                }}
                                className="text-gray-800 text-3xl font-playfair cursor-pointer"
                                title="View Room Details"
                            >
                                {room.hotel.name}
                            </p>
                            <div className="flex items-center">
                                <StarRating />
                                <p className="ml-2 text-sm text-gray-500">200+ reviews</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600 mt-2 text-sm">
                                <img src={assets.locationIcon} alt="location-icon" />
                                <span>{room.hotel.address}</span>
                            </div>
                            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                                {room.amenities.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FFF8E1] border border-amber-300 shadow-sm">
                                        <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                                        <p className="text-xs">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xl font-semibold text-amber-700">Rs. {room.pricePerNight} /night</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filter Panel */}
            <div className="bg-white w-80 border border-gray-200 shadow-lg text-gray-700 rounded-xl overflow-hidden max-lg:mb-10 lg:sticky top-28">
                <div className={`flex items-center justify-between px-5 py-3 border-b border-gray-300 ${openFilters && 'border-b'}`}>
                    <p className="text-base font-semibold text-amber-800">FILTERS</p>
                    <div className="text-xs cursor-pointer">
            <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
              {openFilters ? 'HIDE' : 'SHOW'}
            </span>
                        <span onClick={clearFilters} className="hidden lg:block text-amber-600 hover:underline">
              CLEAR
            </span>
                    </div>
                </div>

                <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
                    <div className="px-5 pt-5">
                        <p className="font-semibold text-gray-800 pb-2">Popular filters</p>
                        {roomTypes.map((room, index) => (
                            <CheckBox
                                key={index}
                                label={room}
                                selected={selectedFilters.roomType.includes(room)}
                                onChange={(checked) => handleFilterChange(checked, room, 'roomType')}
                            />
                        ))}
                    </div>
                    <div className="px-5 pt-5">
                        <p className="font-semibold text-gray-800 pb-2">Price Range</p>
                        {priceRanges.map((range, index) => (
                            <CheckBox
                                key={index}
                                label={`Rs. ${range}`}
                                selected={selectedFilters.priceRange.includes(range)}
                                onChange={(checked) => handleFilterChange(checked, range, 'priceRange')}
                            />
                        ))}
                    </div>
                    <div className="px-5 pt-5 pb-7">
                        <p className="font-semibold text-gray-800 pb-2">Sort By</p>
                        {sortOptions.map((option, index) => (
                            <RadioButton
                                key={index}
                                label={option}
                                selected={selectedSort === option}
                                onChange={() => handleSortChange(option)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRooms;
