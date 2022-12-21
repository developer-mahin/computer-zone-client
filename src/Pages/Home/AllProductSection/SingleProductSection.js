import React from 'react';
import { Link } from 'react-router-dom';


const SingleProductSection = ({ product }) => {
    const { picture, name, resale_price, original_price, _id } = product

    return (
        <div className="rounded-md shadow-md hover:shadow-2xl cursor-pointer">
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
                <div className='flex justify-between items-center gap-6'>
                    <Link
                    to={`/all_product_details/${_id}`}
                        className="flex items-center justify-center w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-2 rounded-lg text-white font-semibold hover:rounded-full"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProductSection;