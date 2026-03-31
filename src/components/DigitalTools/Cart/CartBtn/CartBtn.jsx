import React from 'react';

const CartBtn = ({ setSelectedTools }) => {
    return (
        <button onClick={() => setSelectedTools([])} className='btn w-full h-auto py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full text-lg hover:-translate-0.5 transition duration-200'>
            Proceed to Checkout
        </button>
    );
};

export default CartBtn;