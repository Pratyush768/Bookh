import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import Title from '../../components/Title';
import { useAppContext } from '../../context/AppContext';

const Dashboard = () => {
    const { currency, user, getToken, toast, axios } = useAppContext();

    const [dashboardData, setDashboardData] = useState({
        bookings: [],
        totalBookings: 0,
        totalRevenue: 0,
    });

    const fetchDashboardData = async () => {
        try {
            const { data } = await axios.get('/api/bookings/hotel', {
                headers: { Authorization: `Bearer ${await getToken()}` },
            });
            if (data.success) {
                setDashboardData(data.dashboardData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            fetchDashboardData();
        }
    }, [user]);

    return (
        <div className="py-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FFFBF2] min-h-screen">
            <Title
                align="left"
                font="playfair"
                title="Dashboard"
                subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
            />

            {/* Summary Cards */}
            <div className="flex flex-wrap gap-6 mt-10">
                <div className="bg-white border border-amber-200 shadow-md rounded-xl flex items-center p-5 w-full sm:w-[300px]">
                    <img src={assets.totalBookingIcon} className="w-10 h-10 mr-4" alt="bookings" />
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold text-gray-800">Total Bookings</span>
                        <span className="text-[#bfa76f] text-xl font-bold">{dashboardData.totalBookings}</span>
                    </div>
                </div>

                <div className="bg-white border border-amber-200 shadow-md rounded-xl flex items-center p-5 w-full sm:w-[300px]">
                    <img src={assets.totalRevenueIcon} className="w-10 h-10 mr-4" alt="revenue" />
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold text-gray-800">Total Revenue</span>
                        <span className="text-[#bfa76f] text-xl font-bold">
              {currency} {dashboardData.totalRevenue}
            </span>
                    </div>
                </div>
            </div>

            {/* Recent Bookings */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-5 font-playfair">
                Recent Bookings
            </h2>

            <div className="overflow-x-auto max-w-full">
                <table className="min-w-[700px] w-full bg-white border border-gray-300 rounded-xl overflow-hidden text-left shadow-lg">
                    <thead className="bg-[#FFF8E1] text-sm text-gray-700">
                    <tr>
                        <th className="py-4 px-6">User Name</th>
                        <th className="py-4 px-6">Room Name</th>
                        <th className="py-4 px-6 text-center">Total Amount</th>
                        <th className="py-4 px-6 text-center">Payment Status</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    {dashboardData.bookings.map((item, index) => (
                        <tr key={index} className="border-t border-gray-200">
                            <td className="px-6 py-4">{item.user.username}</td>
                            <td className="px-6 py-4 text-gray-500">{item.room.roomType}</td>
                            <td className="px-6 py-4 text-center">
                                {currency} {item.totalPrice}
                            </td>
                            <td className="px-6 py-4 text-center">
                  <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.isPaid
                              ? 'bg-green-100 text-green-600'
                              : 'bg-yellow-100 text-yellow-700'
                      }`}
                  >
                    {item.isPaid ? 'Completed' : 'Pending'}
                  </span>
                            </td>
                        </tr>
                    ))}
                    {dashboardData.bookings.length === 0 && (
                        <tr>
                            <td colSpan="4" className="py-6 text-center text-gray-400">
                                No bookings found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
