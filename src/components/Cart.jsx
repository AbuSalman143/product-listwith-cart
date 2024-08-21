import React from 'react'
import Confirm from './Confirm';
import { useState } from 'react';
import EmptyCartImg from "../asset/illustration-empty-cart.svg"

function Cart({ products, productCount ,setProductCount}) { 
    const [isPopupOpen, setIsPopupOpen] = useState(false);
const handdelItemRemove=(id)=>{
    const updateCount={...productCount}
    delete updateCount[id]
    setProductCount(updateCount)
}
    const totalCart=Object.values(productCount).reduce((a,b)=>a+b,0)
    const totalPrice=products.reduce((total,product)=>{
            return total+(productCount[product.id] ||0) *product.price
    },0)

   
    const handleConfirmOrder = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setProductCount({});
    };
    
    const hasProducts = Object.keys(productCount).length > 0;
    
    return (hasProducts?(<diV>
        <div className='bg-white w-[25%] max-h-[550px] fixed right-0 px-5 py-5 rounded-2xl flex flex-col justify-between gap-20 overflow-scroll'>
            <div>
            <h1 className='text-2xl font-bold text-rose950'>Your Cart ({totalCart})</h1>
            <ul>
                {products.map((product) => { 
                    return (
                        productCount[product.id] > 0 && (
                            <li key={product.id} className='flex items-center border-b py-3 border-gray-400 justify-between '>
                                <div className='flex flex-col gap-1  '>
                                    <div>
                                    <h2 className='font-bold'>{product.name}</h2>
                                </div>
                                        
                                <div className='flex gap-4'>
                                    <p className=' text-red-950 font-bold'>{productCount[product.id]}x </p>
                                    <p className='text-gray-500'> @{product.price}</p>
                                    <p className='text-red-800 font-semibold' > ₹ {product.price * productCount[product.id]}</p>
                                </div>
                                    </div>
                                    
                                
                                         <div className='w-8 h-8 text-center text-white bg-rose-950 font-bold  cursor-pointer border border-black rounded-full' onClick={()=>{handdelItemRemove(product.id)}}>x</div> 
                            </li>
                        )
                    )
                })}
            </ul>
            </div>

            <div className='flex flex-col gap-9'>
            <div className='flex justify-between items-center'>
                <p className='text-gray-500 font-bold text-xl'>Oder Total</p>
                <h1 className='text-5xl font-bold text-rose-950'>₹ {totalPrice}</h1>
            </div>
            <button onClick={handleConfirmOrder} className='font-bold text-xl bg-rose-950 text-white rounded-xl py-2 cursor-pointer'>Confirm Order</button>
            </div>
        </div>



        {isPopupOpen && (
                <Confirm
                    products={products}
                    productCount={productCount}
                    totalPrice={totalPrice}
                    onClose={handleClosePopup}
                />
            )}
    </diV>):(<div className='bg-white w-[25%] max-h-[550px] fixed right-0 px-5 py-5 rounded-2xl flex flex-col' >
        <h1 className='text-2xl font-bold text-rose950'>Your Cart ({totalCart})</h1>
            <img src={EmptyCartImg}/>
    </div>)
        
        
    )
}

export default Cart
