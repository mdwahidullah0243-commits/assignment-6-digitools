import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';

const Category = ({category}) => {
    const {title, itemList} = category;

    return (
        <div className='space-y-5'>
            <h3 className='text-lg font-semibold underline decoration-3 underline-offset-5 lg:no-underline'>{title}</h3>
            <ul className='text-slate-300'>
                {
                    itemList.map(item => {
                        return (
                            <CategoryItem
                                key={item.id}
                                item={item} />
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Category;