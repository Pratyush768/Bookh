import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
    const { setShowHotelReg, axios, getToken, setIsOwner } = useAppContext();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                `/api/hotels/`,
                { name, contact, address, city },
                { headers: { Authorization: `Bearer ${await getToken()}` } }
            );

            if (data.success) {
                toast.success(data.message);
                setIsOwner(true);
                setShowHotelReg(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div
            onClick={() => setShowHotelReg(false)}
            className="fixed top-0 left-0 right-0 bottom-0 z-[100] bg-black/70 flex justify-center items-center"
        >
            <form
                onSubmit={onSubmitHandler}
                onClick={(e) => e.stopPropagation()}
                className="flex bg-white rounded-xl shadow-lg max-w-4xl max-md:mx-4"
            >
                {/* Image Section */}
                <img
                    src={assets.horeg}
                    alt="register"
                    className="w-1/2 object-cover rounded-l-xl hidden md:block"
                />

                {/* Form Section */}
                <div className="relative flex flex-col items-start gap-4 md:w-1/2 p-8 md:p-10 text-gray-800 font-inter">
                    <img
                        src={assets.closeIcon}
                        alt="close"
                        className="absolute top-4 right-4 h-5 w-5 cursor-pointer opacity-60 hover:opacity-90"
                        onClick={() => setShowHotelReg(false)}
                    />
                    <h2 className="text-3xl font-playfair font-semibold text-amber-800 mt-4">
                        Register Your Hotel
                    </h2>

                    {/* Hotel Name */}
                    <div className="w-full">
                        <label className="text-sm text-gray-600 font-medium">Hotel Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Royal Grand Palace"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-light focus:outline-amber-500"
                        />
                    </div>

                    {/* Phone */}
                    <div className="w-full">
                        <label className="text-sm text-gray-600 font-medium">Phone</label>
                        <input
                            type="text"
                            placeholder="e.g. +91 9876543210"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-light focus:outline-amber-500"
                        />
                    </div>

                    {/* Address */}
                    <div className="w-full">
                        <label className="text-sm text-gray-600 font-medium">Address</label>
                        <textarea
                            rows="2"
                            placeholder="e.g. 123 MG Road, Bengaluru"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-light focus:outline-amber-500 resize-none"
                        />
                    </div>

                    {/* City */}
                    <div className="w-full max-w-60">
                        <label className="text-sm text-gray-600 font-medium">City</label>
                        <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-light focus:outline-amber-500"
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-4 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:brightness-105 text-white font-medium px-6 py-2.5 rounded-full transition-all shadow-md"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HotelReg;
