import React from 'react';
import FeatureTool from './FeatureTool/FeatureTool';

const DigitalToolCard = ({ tool }) => {
    const { features, tagType } = tool;

    return (
        <div className='flex flex-col justify-between border border-gray-300 shadow-sm rounded-xl px-5 pt-3 pb-5 space-y-7'>
            <div className='space-y-5'>
                <div className='flex justify-end'>
                    <span className={`${tagType === 'Popular' ? 'bg-[#E1E7FF] text-[#4F39F6]' : tagType === 'New' ? 'bg-[#DBFCE7] text-[#0A883E]' : 'bg-[#FEF3C6] text-[#BB4D00]'} py-2 px-5 rounded-full font-semibold`}>
                        {tagType}
                    </span>
                </div>

                <div className='flex'>
                    <div className='border border-gray-300 rounded-full p-4'>
                        <img src={tool.icon} alt="" />
                    </div>
                </div>

                <div className='space-y-3 mt-7'>
                    <h3 className='text-2xl font-bold'>{tool.name}</h3>
                    <p className='text-[#627382] text-base'>
                        {tool.description}
                    </p>
                </div>

                <div>
                    <span className='text-2xl font-bold'>${tool.price}</span>
                    <span className='text-[#627382] text-base'>/{tool.period}</span>
                </div>

                <ul className='text-[#627382] text-base space-y-2 font-medium'>
                    {
                        features.map((feature, index) => {
                            return <FeatureTool key={index} feature={feature} />
                        })
                    }
                </ul>
            </div>

            <div>
                <button className='btn w-full h-auto py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full text-lg'>
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default DigitalToolCard;