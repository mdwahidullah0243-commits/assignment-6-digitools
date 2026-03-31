import React from 'react';
import AddedDigiTool from './AddedDigiTool/AddedDigiTool';
import CartBtn from './CartBtn/CartBtn';
import { ShoppingCart } from 'lucide-react';

const Cart = ({ selectedTools, setSelectedTools }) => {
    console.log(selectedTools);

    let total = 0;
    for (const item of selectedTools) {
        const price = item.price;
        total += price;
    }
    console.log(total);

    return (
        <div className='border border-gray-300 rounded-xl p-5 space-y-6'>
            <h2 className='text-2xl font-bold text-[#101727]'>
                Your Cart
            </h2>

            <div className='grid gap-5'>
                {
                    selectedTools.length === 0
                        ?
                        <div className='space-y-3 py-6 flex flex-col justify-center items-center'>
                            <span className='text-gray-400'>
                                <ShoppingCart size='98px' />
                            </span>
                            <p className='text-gray-500 text-lg font-medium'>Your cart is empty!</p>
                        </div>
                        :
                        selectedTools.map(tool => {
                            return (
                                <AddedDigiTool
                                    key={tool.id}
                                    tool={tool}
                                    selectedTools={selectedTools}
                                    setSelectedTools={setSelectedTools} />
                            )
                        })
                }
            </div>

            <div className={`${selectedTools.length === 0 ? 'hidden' : 'flex'} justify-between items-center mt-10`}>
                <span className='text-[#627382] text-xl font-medium'>Total:</span>
                <span className='text-2xl font-bold text-[#101727]'>${total}</span>
            </div>

            <div className={`${selectedTools.length === 0 ? 'hidden' : ''}`}>
                <CartBtn setSelectedTools={setSelectedTools} />
            </div>
        </div>
    );
};

export default Cart;