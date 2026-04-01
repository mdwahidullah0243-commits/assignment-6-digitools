# Project: Digital Tools Buying Website

## 📝 Description:
A modern digital marketplace for buying essential tools and software. Users can easily browse, compare, and purchase a wide range of digital products with a smooth and secure experience. The platform focuses on simplicity, fast access, and reliable delivery to help users get the tools they need without hassle.

## ⚙️ Technologies Used:
- React.js
- Tailwind CSS
- DaisyUI
- JavaScript (ES6+)
- React-Toastify (NPM Package)
- lucide-react (NPM Package)
- JSON (for product data)

## 🧩 Features:
1. Scalable & Reusable Data Structure:  
The JSON is designed as a clean, flat data schema — each product object is self-contained with consistent property types (string, number, array). This makes it easy to plug into the React framework, map over the array to render UI components, or connect to a backend/database with minimal transformation.
2. Consistent Pricing & Period Logic:  
Each product has a price as a numeric value and period strictly limited to one of three values — "monthly", "yearly", or "one-time". This makes it straightforward to implement conditional rendering on the frontend.
3. Tag-Based Badge System:  
Every product has a tag field with values like "Popular", "New", "Best Seller", or "Free" — making it trivial to render dynamic badges on product cards. These values can also be used to implement filter functionality, allowing users to sort or browse products by category. This dual-purpose design means a single field serves both the display layer and the filtering logic simultaneously.
