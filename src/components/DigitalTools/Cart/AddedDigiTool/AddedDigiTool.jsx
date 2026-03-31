import React from 'react';

const AddedDigiTool = ({ tool, selectedTools, setSelectedTools }) => {
    const handleRemoveToolFromCart = (tool) => {
        const filteredCart = selectedTools.filter(existTool => existTool.name !== tool.name);

        setSelectedTools(filteredCart);
    }

    return (
        <div className='bg-[#F9FAFC] p-5 rounded-xl flex justify-between items-center'>
            <div className='flex items-center gap-5'>
                <div className='bg-white border border-gray-300 rounded-full p-3'>
                    <img src={tool.icon} alt="" />
                </div>
                <div>
                    <h3 className='text-xl font-semibold'>{tool.name}</h3>
                    <p className='text-[#627382] font-medium'>${tool.price}</p>
                </div>
            </div>

            <button onClick={() => handleRemoveToolFromCart(tool)} className='text-[#FF3980] hover:text-[#dd0353] text-lg font-bold cursor-pointer'>
                Remove
            </button>
        </div>
    );
};

export default AddedDigiTool;