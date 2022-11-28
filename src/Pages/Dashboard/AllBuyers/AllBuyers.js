import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import BigSpinner from '../../../components/Spinner/BigSpinner';
import TableContent from '../../../components/TableContent/TableContent';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import "./Allbuyers.css";


const AllBuyers = () => {
    const [loading, setLoading] = useState(false)
    const { logOut } = useContext(AuthContext)
    const { data: allBuyers = [], refetch } = useQuery({

        queryKey: ["allBuyers"],
        queryFn: async () => {
            setLoading(true)
            const res = await fetch("https://computer-zone-server.vercel.app/myUsers?userRole=buyer", {
                headers: {
                    authorization: `bearer ${localStorage.getItem("access-token")}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                return logOut()
                    .then(() => { })
                    .then((err) => {
                        toast.message(err.message)
                    })
            }
            const data = await res.json()
            setLoading(false)
            return data;
        }

    })


    return (
        <>
            {
                loading ? <BigSpinner></BigSpinner> : <>

                    {
                        allBuyers.length > 0 ? <>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <thead>
                                        <tr className='text-gray-300'>
                                            <th>
                                                <label>
                                                    No.
                                                </label>
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Verify</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (allBuyers.length) && allBuyers?.map((buyer, index) => <TableContent
                                                key={buyer._id}
                                                data={buyer}
                                                index={index}
                                                refetch={refetch}
                                            ></TableContent>)
                                        }

                                    </tbody>


                                </table>
                            </div>
                        </>
                            :
                            <>
                                <h2 className='text-center h-screen flex items-center justify-center text-4xl font-bold capitalize text-white'>There is no Buyers </h2>
                            </>

                    }

                </>
            }
        </>
    );
};

export default AllBuyers;