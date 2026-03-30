import React from 'react';
import { User, Package, Rocket } from 'lucide-react';

const Card = ({ stepCard }) => {
    const { id, title, description } = stepCard;

    return (
        <div className='border border-gray-200 bg-white shadow-sm  rounded-lg p-6 space-y-5'>
            <div className='flex justify-end items-center'>
                <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-3 py-2 text-white font-semibold'>{id}</span>
            </div>

            <div className='flex justify-center'>
                <span className='bg-slate-200 p-5 rounded-full text-[#4F39F6]'>
                    {
                        id === '01' ? <User size='40px' />
                            : id === '02' ? <Package size='40px' />
                                : <Rocket size='40px' />
                    }
                </span>
            </div>

            <div className='text-center space-y-3'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <p className='text-[#627382] text-base'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;