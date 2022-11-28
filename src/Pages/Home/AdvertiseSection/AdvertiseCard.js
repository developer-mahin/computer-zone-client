import React from 'react';

const AdvertiseCard = ({ data }) => {
    const { picture, name, description, resale_price, original_price, seller_img, seller_name, seller_email,verify } = data;


    return (
        <div className="card w-full bg-base-100 shadow-xl border">
            <div><img src={picture} className="w-full lg:h-96 h-60 rounded-2xl" alt="Shoes" /></div>
            <div className="card-body px-3">
                <h2 className="card-title">{name}</h2>
                <p className='font-medium'>{description}</p>

                <div className='flex justify-between lg:items-center flex-col lg:flex-row '>
                    <div>
                        <p className='font-medium'>🔹 Resale Price: {resale_price}</p>
                        <p className='font-medium'>🔹 Original Price: {original_price}</p>
                    </div>
                    <div className='flex items-center gap-3 lg:mt-0 mt-4'>
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
                        className='flex bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-3 rounded-lg text-white font-semibold hover:rounded-full'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                        </svg>
                        <span>Book Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;