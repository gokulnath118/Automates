# 🚗 AutoMates - Vehicle Leasing Platform

AutoMates is a vehicle leasing platform where **Owners** can list vehicles, **Leasers** can search and book them, and **Admins** can manage and monitor the entire system. It’s designed to streamline the rental process with user-friendly dashboards and booking workflows.

🔗 **Live Demo**: [https://automates-s2zu.vercel.app/](https://automates-s2zu.vercel.app/)

---

## 🔐 Default Login Credentials

Use the following default accounts to log in and explore the platform:

| Role   | Email             | Password  |
|--------|------------------|-----------|
| Admin  | admin@gmail.com  | admin123  |
| Owner  | owner@gmail.com  | owner123  |
| Leaser | leaser@gmail.com | leaser123 |

> Note: This app uses `localStorage` to simulate user sessions. No backend authentication is implemented in this version.

---

## ✨ Features

### 🧑‍💼 Admin
- View all vehicles listed by owners.
- Filter vehicles by type, fuel type, pincode, etc.
- View, block, or remove users.
- Analyze booking data via charts and filters.
- Export booking reports to PDF.

### 🚘 Owner
- Add and manage vehicle listings.
- Approve or reject booking requests.
- View and edit personal profile.

### 👤 Leaser
- Search and filter available vehicles.
- Book vehicles for specific dates.
- Cancel unapproved bookings.
- View and edit profile.

---

## 🧰 Tech Stack

- **Frontend**: React.js, CSS Modules
- **Routing**: React Router
- **State Management**: React Hooks, `localStorage`
- **Charts & Reports**: Chart.js, jsPDF
- **Deployment**: Vercel

---

## 🚀 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/gokulnath118/Automates.git

# Change directory
cd Automates

# Install dependencies
npm install 
npm install react-router-dom

# Run development server
npm start
