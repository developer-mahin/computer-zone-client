import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SmallSpinner from '../../../components/Spinner/SmallSpinner';

const MyProductsCard = ({ product, refetch }) => {
    const { name, original_price, picture, published_date, resale_price, years_of_use, status } = product;

    const [loading, setLoading] = useState(false)

    const handleAddToAdvertise = () => {
        setLoading(true)
        fetch("https://computer-zone-server.vercel.app/advertise", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("access-token")}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product successfully added in the advertise section")
                    setLoading(false)
                }
            })
            .catch(err => {
                toast.error("Already this product have in the advertise")
                setLoading(false)
            })
    }


    return (
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:pb-20 pb-9">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-black uppercase rounded-full bg-gradient-to-r from-secondary to-primary ">
                                Published Data: {published_date}
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-3 font-sans text-xl font-bold tracking-tight text-gray-300 lg:text-2xl sm:text-3xl sm:leading-none">
                            {name}
                        </h2>
                        <ul className='text-gray-300'>
                            <li>
                                🔹 Original price: {original_price}
                            </li>
                            <li>
                                🔹 Resale price: {resale_price}
                            </li>
                            <li>
                                🔹 Used of : {years_of_use}
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center md:flex-row gap-y-3">
                        <button
                            className="btn bg-gradient-to-r from-primary to-secondary border-0 hover:rounded-full font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 focus:shadow-outline focus:outline-none w-full "
                        >
                            {
                                status
                            }
                        </button>
                        <button
                            onClick={() => {
                                handleAddToAdvertise();
                            }}
                            disabled={status === "Sold" && true}
                            className="btn bg-gradient-to-r from-secondary to-primary border-0 hover:rounded-full font-semibold text-white transition-colors duration-200 lg:w-1/2 w-full"
                        >
                            {
                                loading ? <SmallSpinner></SmallSpinner> : "Add To Advertise"
                            }

                        </button>
                    </div>
                </div>
                <div className="relative lg:w-1/2">
                    <img
                        className="object-cover w-full h-56 rounded-xl shadow-lg sm:h-96"
                        src={picture}
                        alt=""
                    />
                    <p
                        aria-label="Play Video"
                        className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25 rounded-xl"
                    >

                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyProductsCard;