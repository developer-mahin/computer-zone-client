import React from 'react';

const ProductsDetailsSections = ({ product }) => {

    const { processor, ram, ssd, display, graphics, operating_System, battery, brand, model, utility, webcam, weight, color, dimensions, body_material, condition, warranty } = product
    console.log(product)

    return (
        <div>
            <h2 className='lg:text-2xl text-xl font-semibold text-gray-600'>DESCRIPTION</h2>
            <div className='lg:my-6'>
                <ul>
                    <li className='lg:text-xl text-base text-gray-600'>Brand: {brand}</li>
                    <li className='lg:text-xl text-base text-gray-600'>Model: {model}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Processor: {processor}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Ram: {ram}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 SSD: {ssd}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Display: {display}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Graphics: {graphics}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Operating System: {operating_System}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Battery: {battery}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Utility: {utility}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Webcam: {webcam}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Weight: {weight}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Color: {color}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Dimensions (W x D x H): {dimensions}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Body Material: {body_material}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Condition: {condition}</li>
                    <li className='my-2 lg:text-xl text-base text-gray-700'>💠 Warranty: {warranty}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductsDetailsSections;