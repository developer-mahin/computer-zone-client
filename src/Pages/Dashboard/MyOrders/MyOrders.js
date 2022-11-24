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

    console.log(allBookings);

    return (
        <div>

        </div>
    );
};

export default MyOrders;