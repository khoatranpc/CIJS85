import React, { useState } from 'react'
import Cart from './Cart';
import ShowProduct from './ShowProduct';
import Payment from './Payment';
import { data } from '../Global/data';

const Product = () => {
    const [item, setItem] = useState({
        ...data
    });
    const handleTotal = () => {
        setItem((prev) => {
            prev.total += 1;
            data.total += 1;
            return {
                ...prev
            }
        });
    }
    return (
        <div>
            <Cart khoa={item} inCreaseTotal={handleTotal} />
            <ShowProduct />
            <Payment item={item} />
        </div>
    )
}

export default Product;