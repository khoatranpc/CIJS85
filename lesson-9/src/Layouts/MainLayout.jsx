import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <div className="list-tab">
                <ul>
                    <Link to={'/over-view'}><li>Thông tin khách hàng</li></Link>
                    <Link to={'/business-statistic'}><li>Thống kê kinh doanh</li></Link>
                </ul>
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;