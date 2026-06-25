# 🏨 Noble Nights — Hotel Booking System

<p align="center">
  <b>A modern full-stack hotel booking platform for seamless room reservations and efficient hotel management.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,tailwind,js,git,github,vscode" />
</p>

<p align="center">
  <a href="https://noblenights.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🏨_Try_Now-Noble_Nights-ff7eb9?style=for-the-badge&logo=vercel&logoColor=white&labelColor=8E2DE2" alt="Noble Nights Demo"/>
  </a>
</p>

---

## 🌍 Overview

**Noble Nights** is a full-stack hotel booking system built using the **MERN Stack**. It provides customers with a smooth room-reservation experience while giving hotel administrators the tools needed to manage rooms, bookings, users, and hotel inventory.

The platform includes secure authentication, role-based access, real-time room availability, booking management, and a responsive user interface.

---

## ✨ Features

### 👤 Customer Experience

| Feature                   | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| 🏨 Browse Rooms           | Explore available rooms with hotel details and pricing |
| 📅 Real-Time Availability | Check room availability before making a reservation    |
| ✅ Instant Booking         | Book rooms with confirmation workflow                  |
| 🔐 Secure Authentication  | Register and log in securely                           |
| 👤 Profile Management     | View and manage account information                    |
| 📋 Booking History        | Access and manage previous or active bookings          |
| 📱 Responsive Design      | Smooth experience on desktop, tablet, and mobile       |

### 🛠️ Admin Dashboard

| Feature               | Description                                   |
| --------------------- | --------------------------------------------- |
| 📊 Admin Dashboard    | Centralized overview of hotel operations      |
| 🛏️ Room Management   | Add, update, view, and delete hotel rooms     |
| 📅 Booking Management | Monitor and manage customer reservations      |
| 👥 User Management    | View and manage registered users              |
| 🔄 CRUD Operations    | Perform complete room inventory management    |
| 🛡️ Role-Based Access | Separate permissions for admins and customers |

### 🔒 Security

* 🔑 JWT-based authentication
* 🛡️ Protected API routes
* ✅ Form and input validation
* 🔐 Role-based authorization
* 🌐 Secure client-server communication

---

## 🧱 Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,tailwind,js" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/REST_API-02569B?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

| Layer                | Technology           |
| -------------------- | -------------------- |
| ⚛️ Frontend          | React.js             |
| 🎨 Styling           | Tailwind CSS         |
| 🟢 Backend           | Node.js + Express.js |
| 🍃 Database          | MongoDB              |
| 🔐 Authentication    | JSON Web Token (JWT) |
| 🔄 API Communication | Axios                |
| 🌐 Architecture      | REST APIs            |
| ▲ Deployment         | Vercel               |

---

## 📸 Screenshots

<p align="center">
  <img width="95%" alt="Noble Nights Home Page" src="https://github.com/user-attachments/assets/828736a7-359e-4605-a934-59bf2dbe5b3a" />
</p>

<p align="center">
  <img width="95%" alt="Noble Nights Room Listing" src="https://github.com/user-attachments/assets/a809c7c8-9552-4a9a-8644-628b8975008f" />
</p>

<p align="center">
  <img width="95%" alt="Noble Nights Booking Dashboard" src="https://github.com/user-attachments/assets/49ea5624-181f-4ab7-8bbd-56f3527d27f6" />
</p>

---

## 📂 Project Structure

```text
noble-nights/
│
├── client/                          # React frontend
│   ├── public/
│   └── src/
│       ├── components/              # Reusable UI components
│       ├── pages/                   # Customer and admin pages
│       ├── context/                 # Authentication / global state
│       ├── services/                # Axios API calls
│       ├── App.jsx                  # Main application routes
│       └── main.jsx                 # Application entry point
│
├── server/                          # Node.js + Express backend
│   ├── controllers/                 # Business logic
│   ├── middleware/                  # Authentication middleware
│   ├── models/                      # MongoDB schemas
│   ├── routes/                      # API routes
│   ├── config/                      # Database configuration
│   └── server.js                    # Backend entry point
│
└── README.md
```

---

## 🚀 Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/noble-nights.git
cd noble-nights
```

### 2️⃣ Configure Environment Variables

Create a `.env` file inside the backend/server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

---

### 3️⃣ Set Up the Backend

```bash
cd server
npm install
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

---

### 4️⃣ Set Up the Frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

The frontend will typically run at:

```text
http://localhost:5173
```

---

## 🔮 Future Improvements

* 💳 Integrate online payment gateways
* ⭐ Add room reviews and ratings
* 🗺️ Add hotel location maps
* 📧 Add email booking confirmations
* 🔔 Add booking notifications
* 🌐 Add multi-language support
* 📊 Add revenue and occupancy analytics
* 🖼️ Add image upload for room management
* 📱 Create a dedicated mobile application

---

## ⚠️ Notes

* This project is built for learning, portfolio, and demonstration purposes.
* Booking availability depends on room inventory data stored in MongoDB.
* For production use, configure secure environment variables and deploy the backend separately.
