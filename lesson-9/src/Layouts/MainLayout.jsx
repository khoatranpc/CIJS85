import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <div className="list-tab">
                <ul>
                    <NavLink to={'/over-view'} className={(link) => {
                        return link.isActive && 'active'
                    }}><li>Thông tin khách hàng</li></NavLink>
                    <NavLink to={'/business-statistic'} className={(link) => {
                        return link.isActive && 'active'
                    }}><li>Thống kê kinh doanh</li></NavLink>
                </ul>
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;