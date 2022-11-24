import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProductCard from './SingleProductCard';

const ProductOfCategory = () => {
    const products = useLoaderData();



    return (
        <div className="flex flex-col max-w-4xl mx-auto p-6 space-y-4 sm:p-10 bg-gray-200 rounded">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="grid  divide-y divide-gray-700">
                {

                    products.map(product => <SingleProductCard
                    
                        key={product._id}
                        product={product}

                    ></SingleProductCard>)
                }
               
            </ul>
        </div>
    );
};

export default ProductOfCategory;