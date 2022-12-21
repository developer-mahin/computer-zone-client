import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';
import useTitle from '../hooks/useTitle';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
    useTitle("Dashboard")
    return (
        <div>
            <div>
                <div>
                    <Navbar></Navbar>

                    <div className="drawer drawer-mobile">
                        <input
                            id="dashboard-drawer"
                            type="checkbox"
                            className="drawer-toggle"
                        />

                        <div className="drawer-content bg-[#1e2b47]">

                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>

    );
};

export default DashboardLayout;