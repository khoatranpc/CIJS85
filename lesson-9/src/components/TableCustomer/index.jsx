import React from 'react';
import { Table } from 'antd';
import { formatDateToString, formatNumber, uuid } from '../../utils';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        id: uuid(),
        customerName: 'Trần Đăng Khoa',
        product: 'Ô tô Vin fast VF9',
        payment: 10000000,
        datePayment: new Date()
    },
    {
        id: uuid(),
        customerName: 'Đỗ Rê Mon',
        product: 'Túi thần kỳ loại cao cấp',
        payment: 500000,
        datePayment: new Date()
    },
]
const TableCustomer = () => {
    const columns = [
        {
            title: 'Tên khách hàng',
            dataIndex: 'customerName',
            key: 'customerName'
        },
        {
            title: 'Sản phẩm đã mua',
            dataIndex: 'product',
            key: 'product'
        },
        {
            title: 'Thanh toán',
            dataIndex: 'payment',
            key: 'payment',
            render(value) {
                return formatNumber(value);
            }
        },
        {
            title: 'Ngày thanh toán',
            dataIndex: 'datePayment',
            key: 'datePayment',
            render(value, record, index) {
                return formatDateToString(value);
            }
        },
    ]
    const nav = useNavigate();
    return (
        <div className="table-over-view-customer">
            <Table
                columns={columns}
                dataSource={data}
                onRow={(data) => {
                    return {
                        onClick() {
                            nav(`/customer/detail/${data.id}`);
                        }
                    }
                }}
            />
        </div>
    )
}

export default TableCustomer;