import React, { useEffect, useState } from 'react';
import Title from '../../components/Title';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ListRoom = () => {
    const { axios, getToken, user } = useAppContext();
    const [rooms, setRooms] = useState([]);

    const fetchRooms = async () => {
        try {
            const { data } = await axios.get('/api/rooms/owner', {
                headers: { Authorization: `Bearer ${await getToken()}` },
            });
            if (data.success) {
                setRooms(data.rooms);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const toggleAvailability = async (roomId) => {
        try {
            const { data } = await axios.post(
                '/api/rooms/toggle-availability',
                { roomId },
                {
                    headers: { Authorization: `Bearer ${await getToken()}` },
                }
            );
            if (data.success) {
                toast.success(data.message);
                fetchRooms();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            fetchRooms();
        }
    }, [user]);

    return (
        <div className="py-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FFFBF2] min-h-screen">
            <Title
                align="left"
                font="playfair"
                title={
                    <span className="bg-gradient-to-r from-yellow-700 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Room Listings
          </span>
                }
                subTitle="Manage your luxurious accommodations with ease and elegance."
            />

            <p className="text-gray-500 mt-10 text-sm uppercase tracking-wide">Total Listed Rooms</p>

            <div className="w-full max-w-5xl mt-4 border rounded-2xl border-gray-200 shadow-xl bg-white overflow-hidden">
                <div className="overflow-y-auto max-h-96 custom-scrollbar">
                    <table className="w-full text-sm text-gray-800">
                        <thead className="bg-gradient-to-r from-[#FFF7E1] via-[#FFF0D6] to-[#FFEAC3] text-amber-800 font-medium tracking-wide">
                        <tr>
                            <th className="py-4 px-6 text-left">Room Name</th>
                            <th className="py-4 px-6 text-left max-sm:hidden">Facilities</th>
                            <th className="py-4 px-6 text-left">Price / Night</th>
                            <th className="py-4 px-6 text-center">Availability</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rooms.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-200 hover:bg-[#FFFAF0] transition-all duration-300"
                            >
                                <td className="py-4 px-6 font-semibold">{item.roomType}</td>
                                <td className="py-4 px-6 max-sm:hidden text-gray-500">
                                    {item.amenities.join(', ')}
                                </td>
                                <td className="py-4 px-6 text-amber-700 font-semibold">
                                    ₹{item.pricePerNight}
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            onChange={() => toggleAvailability(item._id)}
                                            checked={item.isAvailable}
                                        />
                                        <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-amber-600 transition-all duration-300"></div>
                                        <span className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6 duration-300 shadow"></span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                        {rooms.length === 0 && (
                            <tr>
                                <td colSpan="4" className="py-6 text-center text-gray-400">
                                    No rooms listed yet.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListRoom;
