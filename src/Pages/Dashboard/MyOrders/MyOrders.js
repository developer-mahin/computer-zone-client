import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

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




    return (
        <>
            <div className="overflow-x-auto bg-slate-500">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th className='w-40'>Product</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {
                                allBookings.map((booking, i) =>
                                    // console.log(booking)
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
                                        <td>
                                            {
                                                !booking.paid && <Link to={`/dashboard/payment/${booking.productId}`}>

                                                    <button className='btn btn-primary border-0 btn-sm px-6'>pay</button>

                                                </Link>
                                            }
                                            {
                                                booking.paid && <span className='text-success text-sm'>Paid</span>

                                            }
                                        </td>

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