import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { MdFavorite } from "react-icons/md";



const SingleProductSection = ({ product }) => {

    const { picture, name, resale_price, original_price, _id, status } = product

    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    return (
        <div className="rounded-md shadow-md">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="font-semibold tracking-wide">{name && name.slice(0, 76) + ".."}</h2>
                    <div className="text-right">
                        <div>
                            <p className="text-lg font-semibold">{resale_price} <span className='font-bold text-2xl'>৳</span>
                            </p>
                            <p className="text-sm line-through">{original_price}৳
                            </p>
                        </div>
                    </div>
                </div>
                {/* <button
                    // onClick={handleBooking}
                    type="button"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-3 rounded-lg text-white font-semibold hover:rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                    </svg>
                    {
                        loading ? <SmallSpinner></SmallSpinner> : "Book now"
                    }
                </button> */}
                <div className='flex justify-between items-center gap-6'>
                    <Link
                    to={`/all_product_details/${_id}`}
                        className="flex items-center justify-center w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-2 rounded-lg text-white font-semibold hover:rounded-full"
                    >
                        Details
                    </Link>
                    {/* <button
                        className="flex items-center justify-between w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-3 py-2 rounded-lg text-white font-semibold hover:rounded-full"
                    >
                        <MdFavorite className='text-white'></MdFavorite>
                        <span>Add to Wishlist</span>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProductSection;