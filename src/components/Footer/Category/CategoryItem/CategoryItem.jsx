import React from 'react';

const CategoryItem = ({item}) => {
    return (
        <a href={item.path}>
            <li className='mb-3 hover:text-cyan-500'>{item.name}</li>
        </a>
    );
};

export default CategoryItem;