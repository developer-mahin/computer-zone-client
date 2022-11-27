import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import SmallSpinner from '../../../../components/Spinner/SmallSpinner';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ modalData, setModalData }) => {

    const { name, resale_price, picture, _id, status } = modalData;
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    const handleBooking = (event) => {
        setLoading(true)
        event.preventDefault()
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;

        const bookingInfo = {
            itemImage: picture,
            itemName: name,
            itemPrice: resale_price,
            userName: user?.displayName,
            userEmail: user?.email,
            userPhone: phone,
            userLocation: location,
            productId: _id,
            status
        }

        fetch("https://computer-zone-server.vercel.app/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Successfully ${name} booked`)
                    setLoading(false)
                }
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.message)
            })

    }

    return (
        <div>
            <input type="checkbox" id="computer-zone-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="computer-zone-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div>
                            <h2 className='font-semibold pt-5'>{name}</h2>
                        </div>
                        <form
                            onSubmit={handleBooking}
                            className="grid grid-cols-1 gap-6 mt-10"
                        >
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                disabled
                                placeholder="Your name"
                                className="input input-bordered w-full font-semibold"
                            />
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                disabled
                                placeholder="Email"
                                className="input input-bordered w-full font-semibold"
                            />
                            <input
                                type="text"
                                name="price"
                                value={`Price  ${resale_price}`}
                                disabled
                                className="input input-bordered w-full font-semibold"
                            />

                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone number"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Meeting location"
                                className="input input-bordered w-full"
                            />

                            <button
                                type="submit" className="w-full btn btn-accent">
                                {
                                    loading ? <SmallSpinner></SmallSpinner> : "Submit"
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;