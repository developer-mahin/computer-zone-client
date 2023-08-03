import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import SmallSpinner from '../../../components/Spinner/SmallSpinner';
import "./Checkout.css";
import { toast } from 'react-hot-toast';


const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("")
    const [success, setSuccess] = useState("")
    const [transactionId, setTransactionId] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("")
    const { itemPrice, itemName, userName, userEmail, productId, status, _id } = booking

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://computer-zone-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("access-token")}`
            },
            body: JSON.stringify({ itemPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [itemPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError("")
        }

        setProcessing(true)
        setSuccess("")
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,


            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const paymentInfo = {
                itemName,
                itemPrice,
                userName,
                userEmail,
                productId,
                bookingId: _id,
                transactionId: paymentIntent.id
            }

            // save payment info in the database
            fetch(`https://computer-zone-server.vercel.app/payments`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("access-token")}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess("Congrats! your payment has been success")
                        toast.success("Congrats! your payment has been success")
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        setProcessing(false)

        setIsLoading(false);
    };


    return (
        <form id="payment-form" className='form w-full' onSubmit={handleSubmit}>
            <CardElement id="payment-element"
                options={{
                    style: {
                        base: {
                            fontSize: '18px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className='payment-button'
                type="submit"
                disabled={isLoading || !stripe || !elements || !clientSecret || processing}>
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>
            <>

                {
                    cardError && <p id="payment-message" className='text-red-600 mt-3 font-medium'>{cardError}</p>
                }
                <div>
                    {
                        processing ? <SmallSpinner></SmallSpinner> : <>
                            {
                                success && <>
                                    <p className='text-green-500 font-medium'>{success}</p>
                                    <p className='font-medium text-xl text-gray-300'>Your Transaction Id is: <span className='font-bold'>{transactionId}</span> </p>
                                </>
                            }
                        </>
                    }
                </div>

            </>
        </form>
    );
};

export default CheckoutForm;