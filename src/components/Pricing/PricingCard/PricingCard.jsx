import React from 'react';
import Feature from '../../ui/Feature/Feature';

const PricingCard = ({ data }) => {
    const { title, description, price, features, buttonContent } = data;

    return (
        <div className={`relative flex flex-col justify-between ${title === 'Pro' ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'bg-[#F9FAFC]'} space-y-8 rounded-xl p-5 border border-gray-200 shadow-sm`}>
            {
                title === 'Pro'
                    ?
                    <span className='absolute -top-5 left-[36%] sm:left-[30%] bg-[#FEF3C6] text-[#BB4D00] font-semibold py-2 px-4 rounded-full'>
                        {data.badge}
                    </span>

                    : ''
            }

            <div className='space-y-8'>
                <div className='space-y-2'>
                    <h3 className='text-2xl font-bold'>{title}</h3>
                    <p className={`${title === 'Pro' ? 'text-slate-300' : 'text-[#627382]'} text-base`}>{description}</p>
                </div>

                <div>
                    <span className='text-4xl font-bold'>${price}</span>
                    <span className={`text-xl ${title === 'Pro' ? 'text-slate-200' : 'text-gray-600'}`}>/Month</span>
                </div>

                <ul className={`${title === 'Pro' ? 'text-white' : 'text-[#627382]'} text-base space-y-2`}>
                    {
                        features.map((feature, index) => {
                            return (
                                <Feature
                                    key={index}
                                    feature={feature}
                                    title={title} />
                            )
                        })
                    }
                </ul>
            </div>

            <div>
                <button className={`btn h-auto py-3 w-full ${title === 'Pro' ? 'bg-white' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'} text-base font-semibold rounded-full transition duration-200 hover:-translate-y-0.5`}>
                    <span className={`${title === 'Pro' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent' : 'text-white'}`}>
                        {buttonContent}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default PricingCard;