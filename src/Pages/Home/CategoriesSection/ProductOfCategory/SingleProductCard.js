import React from 'react';

const SingleProductCard = ({ product }) => {

    console.log(product)

    const { location, name, original_price, published_date, picture, rating, resale_price, seller, years_of_use } = product;

    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="grid lg:grid-cols-2 gap-5">
                <div>
                    <img className="w-full rounded-xl outline-none" src={picture} alt="Polaroid camera" />
                </div>
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
                            <p className="text-sm dark:text-gray-400">{published_date}</p>
                            <div>
                                <ul>
                                    <li>
                                        ✅ Ratings: {rating.number}
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
                                        <img className='w-16 h-16 rounded-full' src={seller.img} alt="" />
                                    </div>
                                    <div className='flex'>
                                        <h3>{seller.name}</h3>
                                        {
                                            seller.verify && <img className='w-4 h-4 rounded-full' src="https://i.ibb.co/VMVn1n3/Eo-circle-light-blue-checkmark-svg-removebg-preview.png" alt="" />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold flex justify-between items-center gap-1">{resale_price} <span className='font-bold text-2xl'>৳</span> </p>
                            <p className="text-sm line-through">{original_price}৳</p>
                        </div>
                    </div>
                    <div className="flex text-sm divide-x">
                        <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                        </button>
                        <button type="button" className="flex items-center px-2 py-1 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                            </svg>
                            <span>Add to Wishlist</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default SingleProductCard;