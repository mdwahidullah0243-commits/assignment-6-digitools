import React, { use, useState } from 'react';
import DigitalToolCard from './DigitalToolCard/DigitalToolCard';

const DigitalTools = ({digitalToolsRes}) => {
    const [selectedTab, setSelectedTab] = useState('products');

    const digitalToolsData = use(digitalToolsRes); 

    return (
        <div className='w-9/12 sm:w-11/12 md:w-10/12 mx-auto mt-20'>
            <div className='flex flex-col items-center gap-6'>

                {/* Heading and Description */}

                <div className='text-center space-y-5'>
                    <h2 className='text-4xl lg:text-5xl font-bold'>
                        Premium Digital Tools
                    </h2>
                    <p className='text-[#627382] text-base'>
                        Choose from our curated collection of premium digital products designed <br />
                        to boost your productivity and creativity.
                    </p>
                </div>

                {/* Tab box */}

                <div role="tablist" className="tabs tabs-box border border-gray-300 rounded-full py-1 px-1">

                    <button
                        onClick={() => setSelectedTab('products')}
                        role="tab"
                        className={`tab rounded-full h-auto px-5 py-2 text-lg font-semibold ${selectedTab === 'products' ? 'tab-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'text-slate-600'} `}>
                        Products
                    </button>

                    <button
                        onClick={() => setSelectedTab('cart')}
                        role="tab"
                        className={`tab rounded-full h-auto py-2 px-5 text-lg font-semibold ${selectedTab === 'cart' ? 'tab-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'text-slate-600'}`}>
                        Cart (0)
                    </button>

                </div>
            </div>


            <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6'>
                {
                    digitalToolsData.map(tool => {
                        return (
                            <DigitalToolCard
                                key={tool.id}
                                tool={tool} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DigitalTools;