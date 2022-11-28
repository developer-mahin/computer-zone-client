import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import SmallSpinner from '../../../components/Spinner/SmallSpinner';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SingleProductSection = ({ product }) => {

    const { picture, name, resale_price, original_price, _id, status } = product

    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)


const handleBooking = ()=>{
    setLoading(true)
    const bookingInfo = {
        itemImage: picture,
        itemName: name,
        itemPrice: resale_price,
        userName: user?.displayName,
        userEmail: user?.email,
        userPhone: "",
        userLocation: "location",
        productId: _id,
        status
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
                toast.success(`Successfully ${name} booked`)
                setLoading(false)
            }
        })
        .catch(err => {
            setLoading(false)
            toast.error(err.message)
        })
}


    return (
        <div className="rounded-md shadow-md">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="font-semibold tracking-wide">{name && name.slice(0, 86) + ".."}</h2>
                    <div className="text-right">
                        <div>
                            <p className="text-lg font-semibold">{resale_price} <span className='font-bold text-2xl'>৳</span>
                            </p>
                            <p className="text-sm line-through">{original_price}৳
                            </p>
                        </div>
                    </div>
                </div>
                <button
                onClick={handleBooking}
                    type="button"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-3 rounded-lg text-white font-semibold hover:rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                    </svg>
                    {
                        loading ? <SmallSpinner></SmallSpinner> : "Book now"
                    }
                </button>
            </div>
        </div>
    );
};

export default SingleProductSection;