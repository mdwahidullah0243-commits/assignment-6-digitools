import React from 'react';
import { toast } from 'react-toastify';

const CartBtn = ({ setSelectedTools }) => {
    const handleProceedCheckout = () => {
        setSelectedTools([]);
        toast.success('Your order is confirmed. Delivery is on the way!', {autoClose: 3000})
    }
    return (
        <button onClick={handleProceedCheckout} className='btn w-full h-auto py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full text-lg hover:-translate-0.5 transition duration-200'>
            Proceed to Checkout
        </button>
    );
};

export default CartBtn;