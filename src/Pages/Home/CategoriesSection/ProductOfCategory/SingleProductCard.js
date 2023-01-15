import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';


const SingleProductCard = ({ product, setModalData }) => {
    const { location, name, original_price, published_date, picture, rating, resale_price, seller_img, verify, seller_name, seller_email, description, _id } = product;
    const [loading, setLoading] = useState(false)
    // const { user } = useContext(AuthContext)
    useTitle("Products-category")
    const handleAddToReport = () => {
        setLoading(true)
        const reportData = {
            name,
            original_price,
            published_date,
            picture,
            location,
            rating,
            resale_price,
            seller_img,
            seller_name,
            seller_email,
            description,
            productId: _id
        }

        fetch("https://computer-zone-server.vercel.app/report-item", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("access-token")}`
            },
            body: JSON.stringify(reportData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Successfully report this product");
                    setLoading(false)
                }
            })
            .catch(err => {
                toast.error(err.message)
                setLoading(false)
            })
    }


    return (
        <div className="rounded-xl shadow-lg hover:shadow-2xl border-none">
            <Link to={`/category_products_details/${_id}`} >
                <div className="">
                    <div>
                        <img className="w-full lg:h-[250px] h-full rounded-xl outline-none" src={picture} alt="Polaroid camera" />
                    </div>
                    <div className="flex lg:col-span-2 flex-col justify-between w-full py-4 px-3">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
                                <p className="text-sm font-medium dark:text-gray-400">{published_date}</p>
                                <div>
                                    <h2 className='text-xl font-medium'>Seller Details</h2>

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
                            </div>
                        </div>


                        {/* <div className="flex text-center text-sm divide-x gap-2" >
                        <label
                            onClick={() => setModalData(product)}
                            htmlFor="computer-zone-modal"
                            type="button"
                            className="flex items-center space-x-1 cursor-pointer bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-3 rounded-lg text-black font-semibold hover:rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                            </svg>
                            <span>Book Now</span>
                        </label>
                        <button
                            onClick={handleAddToReport}
                            type="button"
                            className="flex items-center space-x-1 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-6 py-3 rounded-lg text-black font-semibold hover:rounded-full"
                        >

                            {
                                loading ? <PrimarySpinner></PrimarySpinner> : "Report Item"
                            }
                        </button>
                    </div> */}
                    </div>
                </div>
            </Link>
            <div className='lg:my-4 my-2 px-3'>
                <Link to={`/category_products_details/${_id}`} className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-6 py-3 rounded-lg text-black font-semibold hover:rounded-full w-full btn border-none">Details</Link>
            </div>
        </div>
    );
};

export default SingleProductCard;