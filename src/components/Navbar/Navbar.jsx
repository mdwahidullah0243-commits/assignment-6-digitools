import { Menu, X, ShoppingCart } from 'lucide-react';
import NavItem from './NavItem/NavItem';
import { useState } from 'react';

const navItems = [
    {
        id: 1,
        name: "Products",
        path: "/products",
    },
    {
        id: 2,
        name: "Features",
        path: "/features",
    },
    {
        id: 3,
        name: "Pricing",
        path: "/pricing",
    },
    {
        id: 4,
        name: "Testimonials",
        path: "/testimonials",
    },
    {
        id: 5,
        name: "FAQ",
        path: "/faq",
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = navItems.map(item => {
        return (
            <NavItem
                key={item.id}
                item={item} />
        )
    });

    return (
        <div className='shadow-sm py-3'>
            <div className='w-11/12 md:w-10/12 mx-auto flex justify-between items-center'>
                <div className='md:hidden'>
                    <span className='cursor-pointer' onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu />}
                    </span>

                    <ul className={`md:hidden bg-black border py-3 rounded-xl absolute top-15 duration-200 origin-top ${open ? 'scale-y-100' : 'scale-y-0'}`}>
                        {navLinks}
                    </ul>
                </div>

                <h1 className='cursor-pointer py-2 text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                    DigiTools
                </h1>

                <ul className='hidden md:flex items-center gap-8'>
                    {
                        navLinks
                    }
                </ul>

                <div className='flex items-center gap-5'>
                    <span className='cursor-pointer'>
                        <ShoppingCart />
                    </span>

                    <p className='text-base font-medium cursor-pointer hover:text-cyan-600'>
                        Login
                    </p>

                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-lg font-semibold text-white rounded-full'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;