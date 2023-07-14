import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'antd';
import { formatDateToString, formatNumber, uuid } from '../../utils';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TableCustomer = () => {
    const [dataBills, setDataBills] = useState({
        isLoading: false,
        data: null
    });
    const [modalAdd, setModalAdd] = useState(false);
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
            title: 'Hình ảnh',
            dataIndex: 'imageProduct',
            key: 'imageProduct',
            render(value) {
                return <img src={value} className="image-product" style={{ width: 'calc(100% - 100px)' }} />
            }
        },
        {
            title: 'Thanh toán',
            dataIndex: 'payment',
            key: 'payment',
            render(value) {
                return formatNumber(Number(value));
            }
        },
        {
            title: 'Ngày thanh toán',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render(value, record, index) {
                return formatDateToString(new Date(value));
            }
        },
    ]
    useEffect(() => {
        if (!dataBills.data) {
            axios.get(`https://64b15771062767bc4826100a.mockapi.io/api/v1/bills`).then((rs) => {
                setDataBills({
                    isLoading: false,
                    data: rs.data
                });
            })
        }
    }, []);
    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBill = {
            id: uuid(),
            customerName: e.target['customerName'].value,
            email: '',
            datePayment: new Date().toString(),
            product: e.target['product'].value,
            payment: e.target['payment'].value,
            imageProduct: 'https://firebasestorage.googleapis.com/v0/b/cijs85-3bd2e.appspot.com/o/products%2Flamborghini.jpeg?alt=media&token=07485078-edda-45f8-b5ae-a28dba614431'
        }
        axios.post('https://64b15771062767bc4826100a.mockapi.io/api/v1/bills', {
            ...newBill
        }).then((rs) => {
            console.log(rs);
        })
    }
    return (
        <div className="table-over-view-customer">
            <Button
                onClick={() => {
                    setModalAdd(true);
                }}
            >Thêm</Button>
            <Table
                // loading={dataBills.loading}
                columns={columns}
                dataSource={dataBills.data}
                onRow={(data) => {
                    return {
                        onClick() {
                            nav(`/customer/detail/${data.id}`);
                        }
                    }
                }}
            />
            <Modal
                title="Thêm thông tin khách hàng"
                open={modalAdd}
                onCancel={() => {
                    setModalAdd(false);
                }}
            >
                <form className="form" onSubmit={handleSubmit}>
                    <div className="row">
                        <label>Họ tên KH:</label>
                        <input type="text" placeholder='VD: Nguyễn Văn A' name="customerName" />
                    </div>
                    <div className="row">
                        <label>Sản phẩm đã mua:</label>
                        <input type="text" placeholder='VD: Lamborghini 1000cc' name="product" />
                    </div>
                    <div className="row">
                        <label>Số tiền đã thanh toán:</label>
                        <input type="text" placeholder='VD: 1.000.000.000' name="payment" />
                    </div>
                    <button type="submit" style={{ display: 'none' }}>Thêm</button>
                </form>
            </Modal>
        </div>
    )
}

export default TableCustomer;