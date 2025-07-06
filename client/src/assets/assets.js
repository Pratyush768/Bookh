import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import bdr1 from "./bdr1.jpg"
import bdr2 from "./bdr2.jpg"
import bdr3 from "./bdr3.jpg"
import bdr4 from "./bdr4.jpg"
import rain from "./rain.jpg"
import week from "./week.jpg"
import romantic from "./romantic.jpg"
import Home from "./home.svg"
import V from "./V.svg"
import NobleNights from "./nobleNights.svg"
import horeg from "./horeg.jpg"

export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    Home,
    V,
    NobleNights,
    horeg
}

export const cities = [
    "Mumbai",
    "Delhi",
    "Vijaywada",
    "Hydrabad",
    "Bhubneswar"
];

// Exclusive Offers Dummy Data
// Note: Ensure your image variables (exclusiveOfferCardImg1, etc.) are correctly imported.
// For example:
// import exclusiveOfferCardImg1 from '../assets/images/offer1.jpg';
// import exclusiveOfferCardImg2 from '../assets/images/offer2.jpg';
// import exclusiveOfferCardImg3 from '../assets/images/offer3.jpg';

export const exclusiveOffers = [
    {
        _id: 1,
        title: "Monsoon Serenity Retreat",
        description: "Embrace the rains with a complimentary suite upgrade and enjoy our signature hot chocolate.",
        priceOff: 15,
        // New field: A tag for filtering or displaying badges.
        tag: "Seasonal",
        // New field: A common real-world condition for offers.
        minimumStay: 2,
        // Updated expiry date in a robust ISO format (useful for countdowns).
        expiryDate: "2025-08-31T23:59:59Z",
        image: rain
    },
    {
        _id: 2,
        title: "Romantic Hideaway",
        description: "Designed for couples: Candlelit dinners, spa indulgence, and dreamy ocean views await.",
        priceOff: 30,
        expiryDate: "Sep 14",
        image: romantic, // Make sure this is a romantic-themed image
    },
    {
        _id: 3,
        title: "Weekend Wellness Immersion",
        description: "A weekend of bliss with inclusive spa credits, guided yoga sessions, and healthy gourmet meals.",
        priceOff: 20,
        tag: "Wellness",
        minimumStay: 2,
        expiryDate: "2025-10-15T23:59:59Z",
        image: week
    },
]
// Testimonials Dummy Data
export const testimonials = [
    {
        id: 1,
        name: "Aarav Mehta",
        address: "Mumbai, Maharashtra",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200", // new working image
        rating: 5,
        review:
            "NobleNights turned our anniversary into a dream vacation. The personalized service and premium property selection were unmatched.",
        stayDate: "February 2025"
    },
    {
        id: 2,
        name: "Diya Sharma",
        address: "Bengaluru, Karnataka",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200",
        rating: 4,
        review:
            "I booked a wellness retreat through NobleNights in Coorg, and it was everything I hoped for—serene, luxurious, and seamless.",
        stayDate: "June 2025"

    },
    {
        id: 3,
        name: "Karan Singh",
        address: "Jaipur, Rajasthan",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        rating: 5,
        review:
            "NobleNights curated an authentic Rajasthani palace stay that felt straight out of a movie. Every detail was taken care of.",
        stayDate: "April 2025"
    },
];


// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Grand Palace",
    "address": "Main Road Near Centralcane",
    "contact": "+919023456789",
    "owner": userDummyData,
    "city": "Mumbai",
    "createdAt": "2025-07-10T06:22:11.663Z",
    "updatedAt": "2025-07-10T06:22:11.663Z",
    "__v": 0
}
// / Rooms Dummy Data
// Make sure to import hotelDummyData and image assets correctly.
// For example:
// import { hotelDummyData } from './hotelData';
// import roomImg1 from '../assets/images/room1.jpg';
// import roomImg2 from '../assets/images/room2.jpg';
// import roomImg3 from '../assets/images/room3.jpg';
// import roomImg4 from '../assets/images/room4.jpg';


export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData,
        "roomType": "Deluxe Double Room",
        "pricePerNight": 4500,
        "amenities": ["Air Conditioning", "Mountain View", "Pool Access", "24-Hour Room Service"],
        "images": [bdr1,bdr3,bdr2,bdr4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData,
        "roomType": "Standard Double Bed",
        "pricePerNight": 3499,
        "amenities": ["Room Service", "Power Backup", "Pool Access", "Free WiFi"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData,
        "roomType": "Executive Suite",
        "pricePerNight": 7999,
        "amenities": ["Free WiFi", "Complimentary Breakfast", "Room Service", "Hot & Cold Water"],
        "images": [bdr2,bdr1,bdr4,bdr3],
        "isAvailable": false, // Changed for testing purposes
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-11T08:30:15.120Z", // Changed for testing
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyData,
        "roomType": "Standard Single Room",
        "pricePerNight": 2199,
        "amenities": ["Free WiFi", "Air Conditioning", "Laundry Service"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
];


// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/