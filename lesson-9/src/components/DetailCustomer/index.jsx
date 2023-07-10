import React from 'react';
import { useParams } from 'react-router-dom';

const DetailCustomer = () => {
    const params = useParams();
    console.log(params.customerId);
    // logic tìm kiếm khách hàng có id trùng khớp -> hiển thị ra giao diện
    return (
        <div>DetailCustomer</div>
    )
}

export default DetailCustomer