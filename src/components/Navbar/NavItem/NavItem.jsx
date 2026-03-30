import React from 'react';

const NavItem = ({ item }) => {
    return (
        <a href={item.path}>
            <li className='text-base font-semibold hover:text-blue-800 max-md:py-1 max-md:px-5 max-md:text-gray-100 max-md:hover:bg-gray-400 rounded-lg'>
                {item.name}
            </li>
        </a>
    );
};

export default NavItem;