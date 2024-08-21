import React from 'react'

function Desert({ products, setProductCount, productCount }) {

    const handleButton = (id) => {
       
        if (!productCount[id]) {
            setProductCount({ ...productCount, [id]: 1 }); 
        }
    }

    const handleIncrease = (e, id) => {
        setProductCount({ ...productCount, [id]: productCount[id] + 1 }); 
    }

    const handleDecrease = (e, id) => {
        setProductCount({ ...productCount, [id]: productCount[id] - 1 }); 
    }

    return (
        <div className="border-2 w-[75%] flex flex-col gap-10 ">
            <h1 className='text-black text-6xl font-bold'>Desserts</h1>
            <div className='menu-container flex gap-20 flex-wrap'>
                {products.map((product) => { 
                    return (
                        <div key={product.id} className='menu-card w-[28%]  relative flex flex-col gap-3'>
                            <img src={product.imageSrc} alt={product.name} className='w-[100%] rounded-lg' />
                            <p className='category text-gray-500'>{product.category}</p>
                            <h3 className='font-bold'>{product.name}</h3>
                            <p className='price text-red-950 font-bold'>₹ {product.price}</p>
                            <button className='bg-white border border-black w-36 h-12 rounded-3xl absolute bottom-24 left-20'

                            onClick={() => { handleButton(product.id) }}>
                                {productCount[product.id] > 0 ? (
                                    <div className='btn flex justify-around items-center font-bold text-white w-full h-full rounded-3xl   bg-red-950 '>
                                        <div className='decrease' onClick={(e) => { handleDecrease(e, product.id) }}>-</div>
                                        <div className='count card'>{productCount[product.id]}</div>
                                        <div className='increase' onClick={(e) => { handleIncrease(e, product.id) }}>+</div>
                                    </div>
                                ) : "Add To Cart"}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Desert
