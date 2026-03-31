import { Check } from 'lucide-react';
import React from 'react';

const DigiCardBtn = ({ tool, setSelectedTools, selectedTools, setActiveTool, activeTool }) => {

    const handleSelectedTool = () => {
        const existingItem = selectedTools.find(existingTool => existingTool.name === tool.name);
        
        if (existingItem) {
            alert(`${tool.name} is already exist!`);
        } else {
            setSelectedTools([...selectedTools, tool]);
        }

        setActiveTool(tool.name);
    }

    return (
        <button onClick={handleSelectedTool} className={`btn w-full h-auto py-2 ${activeTool === tool.name ? 'bg-accent' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'} text-white font-bold rounded-full text-lg hover:-translate-0.5 transition duration-200`}>
            {
                activeTool === tool.name
                    ? <span className='flex items-center gap-2'><Check /> Added to Cart!</span>
                    : 'Buy Now'
            }
        </button>
    );
};

export default DigiCardBtn;