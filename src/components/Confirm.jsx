import React from 'react'
import img from "../asset/img.png"

function Confirm({ products, productCount, totalPrice, onClose }) {
    return  (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-lg max-w-lg w-full overflow-scroll max-h-[550px]'>
                <h1 className='text-2xl font-bold text-green-700 mb-4 flex gap-4'> <img src={img} className='w-8'/> <p>Confirm Order</p></h1>
                <ul>
                    {products.map((product) => {
                        return (
                            productCount[product.id] > 0 && (
                                <li key={product.id} className='flex items-center border-b py-3 border-gray-400 justify-between'>
                                    <div className='flex flex-col gap-1'>
                                        <div>
                                            <h2 className='font-bold'>{product.name}</h2>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p className='text-red-950 font-bold'>{productCount[product.id]}x</p>
                                            <p className='text-gray-500'>@{product.price}</p>
                                            <p className='text-red-800 font-semibold'>₹ {product.price * productCount[product.id]}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        );
                    })}
                </ul>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-gray-500 font-bold text-xl'>Order Total</p>
                    <h1 className='text-3xl font-bold text-green-700'>₹ {totalPrice}</h1>
                </div>
                <button
                    className='w-full mt-4 font-bold text-xl bg-green-700 text-white rounded-xl py-2 cursor-pointer'
                    onClick={onClose}
                >
                   Start New Order
                </button>
            </div>
        </div>
    );

}

export default Confirm
