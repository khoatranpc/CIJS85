import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ContextComponent from '../contexts';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <ContextComponent>
            <div className='main-layout'>
                <div className="list-tab">
                    <ul>
                        <NavLink to={'/over-view'} className={(link) => {
                            return link.isActive && 'active'
                        }}><li>Thông tin hoá đơn</li></NavLink>
                        <NavLink to={'/business-statistic'} className={(link) => {
                            return link.isActive && 'active'
                        }}><li>Thống kê kinh doanh</li></NavLink>
                    </ul>
                </div>
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </ContextComponent>
    )
}

export default MainLayout;