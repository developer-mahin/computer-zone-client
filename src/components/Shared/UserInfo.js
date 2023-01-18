import React from 'react';

const UserInfo = () => {
    return (
        <div className='lg:py-20 py-6 container mx-auto px-3'>
            <h2 className='text-2xl font-semibold text-center text-gray-700'>If You want to see all features in the dashboard then sign in with these user accounts</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 lg:mt-10 mt-4'>
                <div className='p-6 border shadow rounded-xl'>
                    <h3 className='text-xl font-bold text-gray-600'>Buyer Dashboard</h3>
                    <div>
                        <p>Email: ruminfarhana@gmail.com</p>
                        <p>Password: 123456$M</p>
                    </div>
                </div>
                <div className='p-6 border shadow rounded-xl'>
                    <h3 className='text-xl font-bold text-gray-600'>Seller Dashboard</h3>
                    <div>
                        <p>Email: samimosman@gmail.com</p>
                        <p>Password: 123456$M</p>
                    </div>
                </div>
                <div className='p-6 border shadow rounded-xl'>
                    <h3 className='text-xl font-bold text-gray-600'>Admin Dashboard</h3>
                    <div>
                        <p>Email: mdmahin1310@gmail.com</p>
                        <p>Password: 123456$M</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserInfo;