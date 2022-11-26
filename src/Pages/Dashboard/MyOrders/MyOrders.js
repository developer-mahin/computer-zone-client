import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext)
    // const [allBookings, setAllBookings] = useState([])


    const { data: allBookings = [] } = useQuery({
        queryKey: ["all-bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("access-token")}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    // axios.get(`http://localhost:5000/bookings?email=${user?.email}`, {
    //     headers: {
    //         authorization: `bearer ${localStorage.getItem("access-token")}`
    //     }
    // })

    //     .then(function (response) {
    //         setAllBookings(response.data)
    //         return response;
    //     })
    //     .catch(function (error) {
    //         toast.error(error.message)
    //     })
    //     .finally(function () {
    //         // always executed
    //     });



    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th className='w-40'>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {
                                allBookings.map((booking, i) =>
                                    <tr
                                        key={booking._id}
                                    >
                                        <th>
                                            <label>
                                                {i + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="">
                                                <div className="avatar">
                                                    <div className="w-32 rounded-xl h-auto">
                                                        <img src={booking.itemImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td className='font-medium'>
                                            <span>{booking.itemName}</span>
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Price: {booking.itemPrice}</span>
                                        </td>

                                        <td><button className='btn btn-primary border-0 btn-sm'>pay</button></td>

                                    </tr>

                                )
                            }
                        </>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyOrders;