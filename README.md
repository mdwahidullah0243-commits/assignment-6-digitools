# Project: Digital Tools Buying Website

## Description:
A modern digital marketplace for buying essential tools and software. Users can easily browse, compare, and purchase a wide range of digital products with a smooth and secure experience. The platform focuses on simplicity, fast access, and reliable delivery to help users get the tools they need without hassle.

## ⚙️ Technologies Used:
- React.js
- Tailwind CSS, DaisyUI
- JavaScript (ES6+)
- React-Toastify (NPM Package)
- lucide-react (NPM Package)
- JSON (for product data)

## Features:
1. Scalable & Reusable Data Structure =
The JSON is designed as a clean, flat data schema — each product object is self-contained with consistent property types (string, number, array). This makes it easy to plug into the React framework, map over the array to render UI components, or connect to a backend/database with minimal transformation.
2. Consistent Pricing & Period Logic =
Each product has a price as a numeric value and period strictly limited to one of three values — "monthly", "yearly", or "one-time". This makes it straightforward to implement conditional rendering on the frontend, such as showing a "Free" badge when price === 0, or calculating annual savings on yearly plans.
3. Feature Array as a Mapped List = 
Every product's features property is a clean string array containing 5 concise bullet points. This can be directly iterated with .map() to render feature lists or pricing comparison tables — with zero extra parsing needed. This pattern is ideal for component-driven architecture, where a single ProductCard component can be fully reused across all 10 products without any conditional data handling.
