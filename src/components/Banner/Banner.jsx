import React from 'react';
import bannerImg from '../../assets/banner.png';
import { Play } from 'lucide-react';
import Button from '../ui/Button/Button';

const Banner = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mt-20 flex flex-col md:flex-row justify-between items-center gap-20'>
            {/* Part ==> 1 */}

            <div className='space-y-4 max-lg:w-125 max-sm:px-10'>
                <div className='flex justify-center items-center gap-2 bg-[#E1E7FF] w-90 max-lg:w-70 max-md:mx-auto py-2 px-3 rounded-full'>
                    <span className="loading loading-ring loading-md text-[#4F39F6]"></span>
                    <span className='text-transparent text-lg max-lg:text-sm font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text'>New: AI-Powered Tools Available</span>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-6xl/20 max-sm:text-3xl max-lg:text-4xl font-bold'>
                        Supercharge Your Digital Workflow
                    </h1>
                    <p className='text-[#627382] text-base/7'>
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                </div>

                <div className='flex items-center gap-3'>
                    <Button content='Explore Products' />

                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full bg-clip-text font-extrabold border-[#4F39F6] transition duration-200 hover:scale-105'>
                        <span className='text-[#4F39F6]'><Play /></span>
                        <span className='text-base text-transparent'>Watch Demo</span>
                    </button>
                </div>
            </div>

            {/* Part ==> 2 */}

            <div className='flex justify-center'>
                <img className='max-md:w-[90%] max-sm:w-[75%]' src={bannerImg} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;