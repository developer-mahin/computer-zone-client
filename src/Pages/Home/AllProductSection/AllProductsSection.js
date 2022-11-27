import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleProductSection from './SingleProductSection';

const AllProductsSection = () => {

    const { data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("https://computer-zone-server.vercel.app/products")
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='container mx-auto lg:py-14 py-8'>
            <div className=" text-center">
                <div className="">
                    <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        PRODUCTS
                    </p>
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        Get your favorite laptop
                    </h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-9'>
                {
                    products.map(product => <SingleProductSection

                        key={product._id}
                        product={product}

                    ></SingleProductSection>)
                }
            </div>
        </div>
    );
};

export default AllProductsSection;