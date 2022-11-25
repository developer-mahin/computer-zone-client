import React from 'react';

const MyProductsCard = ({ product }) => {
    const { description, name, original_price, picture, published_date, resale_price, years_of_use } = product;

    return (
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-black uppercase rounded-full bg-gradient-to-r from-secondary to-primary ">
                                Published Data: {published_date}
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-3 font-sans text-xl font-bold tracking-tight text-gray-900 lg:text-2xl sm:text-4xl sm:leading-none">
                            {name}
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            {description}
                        </p>
                        <ul>
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
                            Available

                        </button>
                        <button
                            className="btn bg-gradient-to-r from-secondary to-primary border-0 hover:rounded-full font-semibold text-gray-800 transition-colors duration-200 w-full "
                        >
                            Add To Advertise
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