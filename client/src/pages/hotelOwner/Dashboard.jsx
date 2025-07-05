import React, { useState } from 'react'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState(dashboardDummyData)

    return (
        // 1. A warm, cream-colored background for a golden feel
        <div className="py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FFFBF2] min-h-screen">

            {/* Page Header */}
            <div className='flex flex-col items-start text-left mb-12'>
                {/* 2. Page title with a golden text gradient */}
                <h1 className='font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 font-bold'>
                    Dashboard
                </h1>
                <p className='text-base text-gray-600 mt-3 max-w-2xl'>
                    Monitor your room listings, track bookings and analyze revenue—all in one place.
                </p>
            </div>

            {/* 3. Redesigned premium summary cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
                <div className='bg-white border border-amber-200/60 rounded-2xl flex p-6 items-center gap-6 shadow-sm hover:shadow-lg hover:shadow-amber-900/10 transition-all'>
                    <div className="bg-amber-100/70 p-4 rounded-full">
                        <img src={assets.totalBookingIcon} alt="Total Bookings" className='h-8 w-8'/>
                    </div>
                    <div className='font-semibold'>
                        <p className='text-gray-500 text-sm'>Total Bookings</p>
                        <p className='text-gray-900 text-3xl mt-1'>{dashboardData.totalBookings}</p>
                    </div>
                </div>
                <div className='bg-white border border-amber-200/60 rounded-2xl flex p-6 items-center gap-6 shadow-sm hover:shadow-lg hover:shadow-amber-900/10 transition-all'>
                    <div className="bg-amber-100/70 p-4 rounded-full">
                        <img src={assets.totalRevenueIcon} alt="Total Revenue" className='h-8 w-8'/>
                    </div>
                    <div className='font-semibold'>
                        <p className='text-gray-500 text-sm'>Total Revenue</p>
                        <p className='text-gray-900 text-3xl mt-1'>₹{dashboardData.totalRevenue.toLocaleString('en-IN')}</p>
                    </div>
                </div>
            </div>

            {/* 4. Modern and polished "Recent Bookings" table */}
            <h2 className='text-2xl text-gray-800 font-serif font-semibold mt-16 mb-6'>Recent Bookings</h2>
            <div className='w-full bg-white rounded-2xl border border-amber-200/60 shadow-sm p-4'>
                <div className="overflow-x-auto">
                    <table className='w-full'>
                        <thead >
                        <tr >
                            <th className='p-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-amber-100'>User Name</th>
                            <th className='p-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-amber-100 max-sm:hidden'>Room</th>
                            <th className='p-4 text-sm font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-amber-100 text-center'>Amount</th>
                            <th className='p-4 text-sm font-semibold text-gray-500 uppercase tracking-wider border-b-2 border-amber-100 text-center'>Payment</th>
                        </tr>
                        </thead>

                        <tbody className='text-sm'>
                        {dashboardData.bookings.map((item, index)=>(
                            <tr key={index} className="border-b border-gray-100 last:border-0">
                                <td className='p-4 text-gray-800 font-medium'>
                                    {item.user.username}
                                </td>
                                <td className='p-4 text-gray-600 max-sm:hidden'>
                                    {item.room.roomType}
                                </td>
                                <td className='p-4 text-gray-800 font-medium text-center'>
                                    ₹{item.totalPrice.toLocaleString('en-IN')}
                                </td>
                                <td className='p-4'>
                                    <div className='flex justify-center'>
                                        <p className={`py-1.5 px-4 text-xs font-semibold rounded-full capitalize ${item.isPaid ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                            {item.isPaid ? 'Completed' : 'Pending'}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;