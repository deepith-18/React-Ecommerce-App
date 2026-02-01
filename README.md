# 🛍️ ShopHub - Modern E-Commerce Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Razorpay](https://img.shields.io/badge/Razorpay-Payment-blue?style=for-the-badge&logo=razorpay)
![Context API](https://img.shields.io/badge/State_Management-Context_API-purple?style=for-the-badge)
![CSS Modules](https://img.shields.io/badge/Styling-CSS_Modules-orange?style=for-the-badge)

A fully functional, responsive E-commerce platform built with React.js. This application simulates a real-world shopping experience featuring product browsing, a dynamic shopping cart, **secure payment integration via Razorpay**, and a dedicated **Admin Dashboard** for product management (CRUD).

---

## 🚀 Key Features

### 🛒 Customer Experience
- **Dynamic Product Catalog:** Fetches products from an external API with loading states and error handling.
- **Smart Cart System:** Add items, adjust quantities, calculate taxes, and view real-time totals.
- **Razorpay Integration:** Complete checkout flow using Razorpay's Payment Gateway (Test Mode).
- **Responsive UI:** Professional, mobile-first design with soft gradients and card-based layout.
- **Product Details:** Dynamic routing to view individual product specifications.

### 🔐 Admin & Authentication
- **Role-Based Access Control:** Separate login flows for Users and Admins.
- **Admin Dashboard:** Private route protected by authentication.
- **CRUD Operations:** Admins can **Add new products** and **Delete existing products** directly from the UI.
- **Global State Management:** Uses React Context API (`AuthContext`, `ProductContext`, `CartContext`) to manage app-wide data without prop-drilling.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Hooks, Functional Components)
- **Routing:** React Router DOM v6
- **State Management:** React Context API + useReducer
- **Payments:** Razorpay Web SDK
- **Styling:** CSS Modules (Scoped styles) + Global CSS Variables
- **API:** FakeStoreAPI (Mock Data) + Local State Simulation

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/shophub-ecommerce.git
   cd shophub-ecommerce

    Install Dependencies
    code Bash

    npm install

    Configure Environment
    This project uses Razorpay. You need a Test Key ID.

        Open src/components/cart/CartSummary/CartSummary.jsx

        Replace "YOUR_RAZORPAY_KEY_ID" with your actual key from the Razorpay Dashboard.

    Run the Application
    code Bash

    npm start

    Open http://localhost:3000 to view it in the browser.

💳 How to Test Payments (Razorpay)

    Add items to your cart.

    Click "Proceed to Checkout" / "Pay Now".

    A Razorpay popup will appear.

    Use the following Test Card details:

        Card Number: 4111 1111 1111 1111 (Visa)

        Expiry: Any future date (e.g., 12/30)

        CVV: 123

        OTP: 123456

    On success, you will receive a confirmation alert and transaction ID.

🔐 Login Credentials (Test Roles)

To test the Admin Dashboard and User features, use these credentials:
Role	Email	Password	Access
Admin	admin@shophub.com	admin123	Full Dashboard Access (CRUD)
User	user@test.com	user123	Browsing & Purchasing Only
📂 Project Structure
code Bash

src/
├── components/
│   ├── cart/           # Cart Item, Summary, & Payment Logic
│   ├── layout/         # Navbar, Footer
│   └── product/        # Product Cards & Grids
├── context/
│   ├── AuthContext.jsx    # Handles Login/Logout/Roles
│   ├── CartContext.jsx    # Handles Cart Logic (Add/Remove/Qty)
│   └── ProductContext.jsx # Handles Global Product List & CRUD
├── hooks/              # Custom Hooks (useCart, useAuth)
├── pages/
│   ├── Admin/          # Admin Dashboard (Protected Route)
│   ├── Cart/           # Shopping Cart View
│   ├── Login/          # Authentication Page
│   ├── ProductList/    # Home/Landing Page
│   └── ProductDetail/  # Single Product View
└── styles/             # Global variables and resets

💡 Implementation Highlights
1. Payment Integration Logic

Instead of relying on heavy backend dependencies for the demo, I implemented a client-side integration of Razorpay. The app dynamically loads the Razorpay SDK script, initializes the payment instance with the calculated total from the CartContext, and handles success/failure callbacks to provide immediate user feedback.
2. Mock Backend via Context

To demonstrate full-stack capabilities without a database, I built a ProductContext that fetches initial data from an API but manages subsequent Create and Delete operations in local memory. This allows the Admin to delete a product and immediately see it disappear from the Home page grid, simulating a real-time database update.
🔮 Future Improvements

    Connect to a Node.js/Express backend for secure payment order generation.

    Implement persistent database (MongoDB) for products.

    Add User Sign-up functionality.

    Add filters for Categories and Price ranges.

Made by Deepith..
