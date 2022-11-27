import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData()


    return (
        <div className='px-4 py-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 items-center'>
                <div>
                    <img src={booking?.itemImage} className="w-full rounded-xl" alt="" />
                </div>
                <div>
                    <h2 className='lg:text-2xl text-xl font-semibold text-gray-300'>Payment {booking?.itemPrice}৳ for {booking?.itemName}</h2>
                    <div className='mt-6'>
                        <Elements
                            stripe={stripePromise}
                        >
                            <CheckoutForm
                                booking={booking}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;