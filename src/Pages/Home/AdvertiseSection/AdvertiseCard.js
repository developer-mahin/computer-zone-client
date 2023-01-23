import React from 'react';
import { Link } from 'react-router-dom';


const AdvertiseCard = ({ product }) => {
    const { picture, name, description, resale_price, original_price, seller_img, seller_name, seller_email, verify, _id } = product;

    return (
        <>
            <div className="hover:shadow-2xl rounded-2xl">
                <div className="card w-full bg-white shadow-xl border">
                    <div className='flex justify-center items-center'><img src={picture} className="w-96 auto rounded-2xl" alt="Shoes" /></div>
                    <div className="card-body px-6">
                        <h2 className="card-title">{name && name.slice(0, 40) + "..."}</h2>
                        <p className='font-medium'>{description && description.slice(0, 60) + "..."}</p>

                        <div className=''>
                            <div>
                                <p className='font-medium'>🔹 Resale Price:<span className='font-bold lg:text-2xl mx-1'>৳</span>{resale_price}</p>
                                <p className='font-medium'>🔹 Original Price:<span className='font-bold lg:text-2xl mx-1'>৳</span>{original_price}</p>
                            </div>
                            <div className='flex items-center gap-3 my-3'>
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
                        <Link
                            to={`/advertiseDetails/${_id}`}
                            className='bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-8 py-2 rounded-lg text-white font-semibold hover:rounded-full text-center'
                        >Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdvertiseCard;