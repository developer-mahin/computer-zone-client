import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BigSpinner from '../../../components/Spinner/BigSpinner';
import SmallSpinner from '../../../components/Spinner/SmallSpinner';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const AdvertiseDetails = () => {
    const product = useLoaderData()
    const [loading, setLoading] = useState(false)
    const { picture, name, description, resale_price, original_price, seller_img, seller_name, seller_email, verify, _id, status } = product
    const {user} = useContext(AuthContext)

    useTitle(name)
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <BigSpinner></BigSpinner>
    }

    // booking click handler
    const handleBooking = () => {
        setLoading(true)
        const bookingInfo = {
            itemImage:picture,
            itemName: name,
            itemPrice:resale_price,
            userName: user?.displayName,
            userEmail: user?.email,
            userPhone: "",
            userLocation: "location",
            productId: _id,
            status: status
        }

        fetch("https://computer-zone-server.vercel.app/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success(`Successfully ${product.name} booked`)
                    setLoading(false)
                }
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.message)
            })
    }


    return (
        <div className='lg:py-20 py-6 bg-white px-3'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 items-center'>
                    <div>
                        <img src={picture} className="w-full h-auto" alt="" />
                    </div>
                    <div className="">
                        <h2 className="card-title">{name}</h2>
                        <p className='font-medium mt-4'>{description}</p>

                        <div className='flex justify-between lg:items-center flex-col lg:flex-row '>
                            <div className='lg:my-0 my-3'>
                                <p className='font-medium'>🔹 Resale Price: {resale_price}</p>
                                <p className='font-medium'>🔹 Original Price: {original_price}</p>
                            </div>
                            <div className='flex items-center gap-3 lg:my-6 mt-0 my-0'>
                                <div className='relative'>
                                    <img src={seller_img} className="w-14 h-14 rounded-full border-4 border-green-500 object-cover" alt="" />
                                    <div className='absolute top-0 right-0'>
                                        {
                                            verify && <>
                                                <img className='w-5 h-5 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Facebook_verified_account_checkmark.jpg" alt="" />
                                            </>

                                        }
                                    </div>
                                </div>
                                <div>
                                    <p className='font-medium lg:text-base text-sm'>Email: {seller_email ? seller_email : "Not Available"}</p>
                                    <p className='font-medium lg:text-base text-sm'>Name: {seller_name ? seller_name : "Not Available"}</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-actions justify-end">
                            <button
                                onClick={() => handleBooking(product)}
                                htmlFor="advertise-modal"
                                className='flex bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-3 rounded-lg text-white font-semibold hover:rounded-full'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                                </svg>
                                {
                                    loading ? <SmallSpinner></SmallSpinner> : "Book Now"
                                }
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseDetails;