import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import AdminMenu from '../AdminMenu/AdminMenu';
import BuyerMenu from '../BuyerMenu/BuyerMenu';
import SellerMenu from '../SellerMenu/SellerMenu';


const Sidebar = () => {
    const { userRole, user } = useContext(AuthContext)

    return (
        <div className="menu p-4 w-80 text-base-content rounded bg-gray-200">

            <div className='flex justify-center'>
                <div>
                    <img className='w-40 h-40 rounded-full object-cover' src={user?.photoURL ? user?.photoURL : "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"} alt="" />
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <h2 className='font-medium hover:underline'> {user?.email} </h2>
                    </div>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <h4 className='font-semibold'> {user?.displayName} </h4>
                    </div>
                </div>
            </div>

            <ul className='mt-6'>
                {
                    userRole === "admin" && <li><AdminMenu></AdminMenu></li>
                }
                {
                    userRole === "seller" && <li><SellerMenu></SellerMenu></li>
                }
                {
                    userRole === "buyer" && <li><BuyerMenu></BuyerMenu></li>
                }
            </ul>
        </div>
    );
};

export default Sidebar;