import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import PrimarySpinner from '../../../../components/Spinner/PrimarySpinner';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const SingleProductCard = ({ product, setModalData }) => {
    const { location, name, original_price, published_date, picture, rating, resale_price, seller_img, verify, seller_name, years_of_use } = product;
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)

    const handleAddToWishList = (product) => {
        setLoading(true)
        const wishlistData = {
            product,
            wishlistAuthor: user?.email
        }

        fetch("http://localhost:5000/wishlist", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("access-token")}`
            },
            body: JSON.stringify(wishlistData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Successfully added in the wishlist");
                    setLoading(false)
                }
            })
            .catch(err => {
                toast.error(err.message)
                setLoading(false)
            })
    }

    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="grid lg:grid-cols-3 gap-5">
                <div>
                    <img className="w-full rounded-xl outline-none" src={picture} alt="Polaroid camera" />
                </div>
                <div className="flex lg:col-span-2 flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
                            <p className="text-sm dark:text-gray-400">{published_date}</p>
                            <div>
                                <ul>
                                    <li>
                                        ✅ Ratings: {rating}
                                    </li>
                                    <li>
                                        ✅ Used Of {years_of_use}
                                    </li>
                                    <li>
                                        ✅ Location: {location}
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='text-xl'>Seller Details</h2>
                                <div className='flex items-center gap-2'>

                                    <div>
                                        <img className='w-16 h-16 rounded-full object-cover' src={seller_img} alt="" />
                                    </div>
                                    <div className='flex'>
                                        <h3>{seller_name}</h3>
                                        {
                                            verify && <img className='w-4 h-4 rounded-full' src="https://i.ibb.co/VMVn1n3/Eo-circle-light-blue-checkmark-svg-removebg-preview.png" alt="" />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold flex justify-between items-center gap-1">{resale_price} <span className='font-bold text-2xl'>৳</span> </p>
                            <p className="text-sm font-bold line-through">{original_price}৳</p>
                        </div>
                    </div>
                    <div className="flex text-sm divide-x">
                        <label
                            onClick={() => setModalData(product)}
                            htmlFor="computer-zone-modal"
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1 cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                            </svg>
                            <span>Book Now</span>
                        </label>
                        <button
                            onClick={() => handleAddToWishList(product)}
                            type="button"
                            className="flex items-center px-2 py-1 space-x-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                            </svg>
                            {
                                loading ? <PrimarySpinner></PrimarySpinner> : "Add to Wishlist"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default SingleProductCard;