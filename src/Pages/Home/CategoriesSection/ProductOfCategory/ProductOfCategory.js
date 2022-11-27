import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BigSpinner from '../../../../components/Spinner/BigSpinner';
import BookingModal from '../BookingModal/BookingModal';
import SingleProductCard from './SingleProductCard';

const ProductOfCategory = () => {
    const products = useLoaderData();
    const navigation = useNavigation()
    const [modalData, setModalData] = useState({})

    if (navigation.state === "loading") {
        return <BigSpinner></BigSpinner>
    }


    return (
        <div className="flex flex-col container mx-auto space-y-4 sm:p-10 bg-gray-200 rounded">
            <h2 className="text-xl font-semibold mt-4 px-3">Category products</h2>
            <ul className="grid  divide-y divide-gray-700 px-3 gap-4">
                {

                    products.map(product => <SingleProductCard
                        key={product._id}
                        product={product}
                        setModalData={setModalData}
                    ></SingleProductCard>)
                }

            </ul>
            <BookingModal
                modalData={modalData}
                setModalData={setModalData}
            ></BookingModal>
        </div>
    );
};

export default ProductOfCategory;