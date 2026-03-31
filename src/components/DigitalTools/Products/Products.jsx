import React, { useState } from 'react';
import DigitalToolCard from './DigitalToolCard/DigitalToolCard';

const Products = ({ digitalToolsData, setSelectedTools, selectedTools }) => {
    const [activeTool, setActiveTool] = useState(null);

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6'>
            {
                digitalToolsData.map(tool => {
                    return (
                        <DigitalToolCard
                            key={tool.id}
                            tool={tool}
                            setSelectedTools={setSelectedTools} selectedTools={selectedTools}
                            setActiveTool={setActiveTool} activeTool={activeTool} />
                    )
                })
            }
        </div>
    );
};

export default Products;