import React from 'react';
import AdvertiseCard from './AdvertiseCard';


const AdvertiseSection = ({ advertiseProducts }) => {
    return (
        <>
            <div className='container mx-auto lg:py-14 py-7 px-3'>
                <div className=" text-center pb-6">
                    <div className="">
                        <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                            advertise
                        </p>
                        <h2 className="mb-6 font-sans lg:text-3xl text-xl font-bold tracking-tight sm:text-4xl sm:leading-none capitalize">
                            Our special offer is running, buy your product immediately
                        </h2>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                    {
                        advertiseProducts.map(product => <AdvertiseCard
                            key={product._id}
                            product={product}
                        ></AdvertiseCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default AdvertiseSection;