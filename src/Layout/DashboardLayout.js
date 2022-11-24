import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';
import BigSpinner from '../components/Spinner/BigSpinner';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
    const { userRoleLoading, user } = useContext(AuthContext);

    return (

        <div>
            {
                userRoleLoading ? <BigSpinner></BigSpinner> : <div>
                    <div>
                        <Navbar></Navbar>

                        <div className="drawer drawer-mobile">
                            <input
                                id="dashboard-drawer"
                                type="checkbox"
                                className="drawer-toggle"
                            />

                            <div className="drawer-content bg-gray-100">

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
            }
        </div>

    );
};

export default DashboardLayout;