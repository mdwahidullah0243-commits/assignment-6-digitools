import React from 'react';

const Workflow = () => {
    return (
        <div className='mt-30 space-y-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-25 text-center'>
            <div className='space-y-6'>
                <h1 className='text-4xl/12 lg:text-5xl font-bold'>Ready To Transform Your Workflow?</h1>
                <p className='text-slate-300'>
                    Join thousands of professionals who are already using Digitools to work smarter. <br /> 
                    Start your free trial today.
                </p>
            </div>

            <div className='space-y-4'>
                <div className='flex justify-center gap-5'>
                    <button className='btn h-auto px-6 py-2 rounded-full font-extrabold transition duration-200 hover:scale-105 shadow-none'>
                        <span className='text-base bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span>
                    </button>
                    <button className='btn h-auto px-6 py-2 rounded-full font-extrabold transition duration-200 hover:scale-105 shadow-none bg-transparent text-white'>View Pricing</button>
                </div>

                <p className='text-slate-300'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;