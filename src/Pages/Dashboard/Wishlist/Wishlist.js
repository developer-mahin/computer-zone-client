import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import BigSpinner from '../../../components/Spinner/BigSpinner';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import SingleWishlist from './SingleWishlist';

const Wishlist = () => {
    const { user } = useContext(AuthContext)
    // const [wishlists, setWishlists] = useState([])
    const [loading, setLoading] = useState(false)

    // axios.get(`http://localhost:5000/myWishlist?email=${user?.email}`,{
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem("access-token")}`
    //         }
    //     })

    //     .then(function (response) {

    //         setWishlists(response.data)
    //         setLoading(false)
    //     })
    //     .catch(function (error) {
    //         toast.error(error.message)
    //     })
    //     .finally(function () {
    //         // always executed
    //     });




    // axios({
    //     method: 'get',
    //     url: `http://localhost:5000/myWishlist?email=${user?.email}`,
    //     headers: {
    //         authorization: `bearer ${localStorage.getItem("access-token")}`
    //     },
    //     responseType: 'stream'
    // })
    //     .then(function (response) {
    //         setWishlists(response.data)
    //         setLoading(false)
    //     });



        const { data: wishlists = [] } = useQuery({
        queryKey: ["all-bookings", user?.email],
        queryFn: async () => {
            setLoading(true)
            const res = await fetch(`http://localhost:5000/myWishlist?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("access-token")}`
                }
            })
            const data = await res.json()
            setLoading(false)
            return data;
        }
    })


    return (
        <>
            {
                loading ? <BigSpinner></BigSpinner> : <>

                <div className="flex flex-col container mx-auto p-6 space-y-4 sm:p-10 ">
                    <h2 className="text-xl font-semibold text-gray-300">Your cart</h2>
                    <ul className="flex flex-col divide-y divide-gray-400">

                        {
                            wishlists?.map(wishlist => <SingleWishlist

                                key={wishlist._id}
                                wishlist={wishlist}

                            ></SingleWishlist>)
                        }

                    </ul>
                </div>
            </>
            }
        </>
    );
};

export default Wishlist;