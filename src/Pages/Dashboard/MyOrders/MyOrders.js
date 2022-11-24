import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: allBookings = [] } = useQuery({
        queryKey: ["all-bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    return (
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
                                {booking.itemName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Price: {booking.itemPrice}</span>
                                </td>
                                <td>
                                <td><button className='btn btn-primary border-0 btn-sm'>pay</button></td>
                                </td>
                            </tr>


                        // <tr
                        //     
                        // >
                        //     <th>{i + 1}</th>
                        //     <td className='font-semibold'>

                        //         <img src= className="w-24 h-auto" alt="" />

                        //     </td>
                        //     <td className='font-semibold w-40'></td>
                        //     <td className='font-semibold'></td>
                        //     
                        // </tr>
                        
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;