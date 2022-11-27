import React, { useContext, useEffect, useState } from 'react';
import PrimarySpinner from '../../../components/Spinner/PrimarySpinner';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Dashboard = () => {
    const [userRole, setUserRole] = useState("")
    const [userRoleLoading, setUserRoleLoading] = useState(false)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        setUserRoleLoading(true)
        fetch(`https://computer-zone-server.vercel.app/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserRole(data.userRole)
                setUserRoleLoading(false)
            })
    }, [user?.email])


    return (
        <>
            {
                userRoleLoading ? <PrimarySpinner></PrimarySpinner> :
                    <>
                        <div className='h-screen  flex flex-col justify-center items-center pb-16 bg-[#1e2b47]'>
                            <div className='flex justify-center items-center text-white'>
                                <p className='text-6xl font-bold'>Welc</p>
                                <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-cyan-400'></div>
                                <p className='text-6xl font-bold mr-2'>me</p>
                                <p className='text-6xl font-bold'>To</p>
                            </div>
                            <div className='flex justify-center text-gray-500 items-center mt-4'>
                                <p className='text-3xl font-medium capitalize'>{userRole} Dashboard</p>
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default Dashboard;