import React from 'react';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/Facebook.png';
import twitterX from '../../assets/twitterFaX.png';
import Category from './Category/Category';

const categories = [
    {
        title: 'Products',
        itemList: [
            {
                id: 1,
                name: "Features",
                path: "/features",
            },
            {
                id: 2,
                name: "Pricing",
                path: "/pricing",
            },
            {
                id: 3,
                name: "Templates",
                path: "/templates",
            },
            {
                id: 4,
                name: "Integrations",
                path: "/integrations",
            }
        ]
    },
    {
        title: 'Company',
        itemList: [
            {
                id: 1,
                name: "About",
                path: "/about",
            },
            {
                id: 2,
                name: "Blog",
                path: "/blog",
            },
            {
                id: 3,
                name: "Careers",
                path: "/careers",
            },
            {
                id: 4,
                name: "Press",
                path: "/press",
            }
        ]
    },
    {
        title: 'Resources',
        itemList: [
            {
                id: 1,
                name: "Documentation",
                path: "/documentation",
            },
            {
                id: 2,
                name: "Help Center",
                path: "/help-center",
            },
            {
                id: 3,
                name: "Community",
                path: "/community",
            },
            {
                id: 4,
                name: "Contact",
                path: "/contact",
            }
        ]
    }
]

const Footer = () => {
    return (
        <div className='bg-[#101727] py-10 px-15 md:px-20 lg:px-25'>
            <div className='w-11/12 md:w-10/12 mx-auto text-white'>

                {/* Part: 1 */}

                <div className='flex flex-wrap justify-center lg:justify-between gap-10 lg:gap-5 border-b border-gray-600 py-20'>
                    <div className='space-y-5'>
                        <h1 className='text-4xl font-bold text-center sm:text-left'>DigiTools</h1>
                        <p className='text-slate-300 text-center sm:text-left'>
                            Premium digital tools for creators, <br />
                            professionals, and businesses. Work smarter <br />
                            with our suite of powerful tools.
                        </p>
                    </div>

                    {
                        categories.map(category => {
                            return (
                                <Category
                                    key={category.title}
                                    category={category} />
                            )
                        })
                    }

                    <div className='space-y-5'>
                        <h3 className='text-lg font-semibold text-center sm:text-left underline decoration-3 underline-offset-5 lg:no-underline'>Social Links</h3>
                        <div className='flex items-center gap-3'>
                            <div className='bg-slate-100 py-2 px-2 rounded-full cursor-pointer transition duration-200 hover:scale-110'>
                                <img src={instagram} alt="" />
                            </div>

                            <div className='bg-slate-100 py-2 px-2 rounded-full cursor-pointer transition duration-200 hover:scale-110'>
                                <img src={facebook} alt="" />
                            </div>

                            <div className='bg-slate-100 py-2 px-2 rounded-full cursor-pointer transition duration-200 hover:scale-110'>
                                <img src={twitterX} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Part: 2 */}

                <div className='flex flex-col lg:flex-row justify-between items-center gap-5 text-slate-300 mt-7'>
                    <p>© 2026 Digitools. All rights reserved.</p>

                    <div className='flex items-center gap-5'>
                        <p className='hover:text-cyan-500 cursor-pointer'>Privacy Policy</p>
                        <p className='hover:text-cyan-500 cursor-pointer'>Terms of Service</p>
                        <p className='hover:text-cyan-500 cursor-pointer'>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;