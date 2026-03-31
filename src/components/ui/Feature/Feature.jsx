import React from 'react';
import { Check } from 'lucide-react';

const Feature = ({feature, title}) => {
    return (
        <li className='flex items-center gap-2'>
            <span className={`${title !== 'Pro' ? 'text-[#30B868]': 'text-white'}`}><Check /></span>
            <span>{feature}</span>
        </li>
    );
};

export default Feature;