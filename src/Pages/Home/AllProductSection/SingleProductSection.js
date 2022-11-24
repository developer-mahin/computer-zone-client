import React from 'react';

const SingleProductSection = ({ product }) => {

    const { picture, name, resale_price, original_price } = product

    return (
        <div className="rounded-md shadow-md">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="font-semibold tracking-wide">{name && name.slice(0, 86) +  ".."}</h2>
                    <div className="text-right">
                        <div>
                            <p className="text-lg font-semibold">{resale_price} <span className='font-bold text-2xl'>৳</span>
                            </p>
                            <p className="text-sm line-through">{original_price}৳
                            </p>
                        </div>
                    </div>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
                    <span>Add to Wishlist</span></button>
            </div>
        </div>
    );
};

export default SingleProductSection;