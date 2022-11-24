import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ modalData, setModalData }) => {

    const { name, resale_price } = modalData;
    const { user } = useContext(AuthContext)


    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;

        const bookingInfo = {
            itemName: name,
            itemPrice: resale_price,
            userName: user?.displayName,
            userEmail: user?.email,
            userPhone: phone,
            userLocation: location
        }

        console.log(bookingInfo)

    }

    return (
        <div>
            <input type="checkbox" id="computer-zone-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="computer-zone-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div>
                            <h2 className='font-semibold'>{name}</h2>
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
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;