import React from 'react';
import { Check } from 'lucide-react';

const FeatureTool = ({ feature }) => {
    return (
        <li className='flex items-center gap-2'>
            <span><Check /></span>
            <span>{feature}</span>
        </li>
    );
};

export default FeatureTool;