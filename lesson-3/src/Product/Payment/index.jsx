import React from 'react'
import { data } from '../../Global/data';

const Payment = (props) => {
    console.log('Payment', data);
    return (
        <div>số lượng: {props.item.total}</div>
    )
}

export default Payment;