import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HotelReg from './components/HotelReg';
import { useAppContext } from './context/AppContext';

// Pages
import Home from './pages/Home';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';

// Owner-specific
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';


const App = () => {
    const isOwnerPath = useLocation().pathname.startsWith("/owner");
    const { showHotelReg, setShowHotelReg } = useAppContext();

    const handleCloseReg = () => {
        setShowHotelReg(false);
    };

    return (
        <div className="font-inter flex flex-col min-h-screen">
            <Toaster position="top-center" reverseOrder={false} />
            {!isOwnerPath && <Navbar />}
            {showHotelReg && <HotelReg onClose={handleCloseReg} />}

            <main className="flex-grow">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<AllRooms />} />
                    <Route path="/rooms/:id" element={<RoomDetails />} />
                    <Route path="/my-bookings" element={<MyBookings />} />

                    {/* Owner Dashboard Routes */}
                    <Route path="/owner" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="add-room" element={<AddRoom />} />
                        <Route path="list-room" element={<ListRoom />} />
                    </Route>
                </Routes>
            </main>

            {!isOwnerPath && <Footer />}
        </div>
    );
};

export default App;