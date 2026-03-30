import React from 'react';

const Button = ({ content }) => {
    return (
        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-base font-semibold text-white rounded-full transition duration-200 hover:scale-105'>
            {content}
        </button>
    );
};

export default Button;