import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const AdvertiseSection = ({ availableData }) => {

    return (
        <div className='container mx-auto lg:py-14 py-7'>
            <div className=" text-center pb-6">
                <div className="">
                    <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        advertise
                    </p>
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        Our special offer is running, buy the product immediately
                    </h2>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                {
                    availableData.map(data => <AdvertiseCard

                        key={data._id}
                        data={data}

                    ></AdvertiseCard>)
                }
            </div>
        </div>
    );
};

export default AdvertiseSection;