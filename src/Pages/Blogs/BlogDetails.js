import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BigSpinner from '../../components/Spinner/BigSpinner';

const BlogDetails = () => {
    const blogDetails = useLoaderData()
    const { image, title, description } = blogDetails

    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <BigSpinner></BigSpinner>
    }


    return (
        <div className='container mx-auto px-3'>
            <div className='mt-5'>
                <h2 className='lg:text-3xl text-2xl font-semibold py-4'>{title}</h2>
                <img src={image} className="w-full h-2/3" alt="" />
            </div>
            <div className='py-6 px-2'>
                <p className='font-medium text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default BlogDetails;