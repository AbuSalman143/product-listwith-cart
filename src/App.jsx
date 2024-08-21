import React, { useEffect, useState } from 'react'
import Desert from './components/Desert'
import Cart from './components/Cart'

function App() {

    
    const [products, setProducts] = useState([]); 
    const [cartCount, setCartCount] = useState(0);
    const [productCount, setProductCount] = useState({}); 

    const dataFetch = async () => {
        try {
            const response = await fetch("../src/utility/data.json");
            const data = await response.json();
            setProducts(data); 
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        dataFetch();
    }, [])

    return (
        <div className='borderborder-2 flex justify-between px-10 py-24 bg-red-100'>
            <Desert products={products} productCount={productCount} setProductCount={setProductCount} />
            <Cart products={products} productCount={productCount} setProductCount={setProductCount}/>
        </div>
    )
}

export default App

