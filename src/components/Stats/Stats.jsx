import React from 'react';

const Stats = () => {
    return (
        <div className='mt-20 flex flex-wrap justify-center items-center gap-y-10 py-15 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='border-r border-r-slate-400 px-25 space-y-3'>
                <h1 className='text-5xl font-bold'>50k+</h1>
                <p className='text-lg text-center'>Active Users</p>
            </div>

            <div className='border-r border-r-slate-400 px-25 space-y-3'>
                <h1 className='text-5xl font-bold'>200+</h1>
                <p className='text-lg text-center'>Premium Tools</p>
            </div>

            <div className='px-25 space-y-3'>
                <h1 className='text-5xl font-bold'>4.9</h1>
                <p className='text-lg text-center'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;