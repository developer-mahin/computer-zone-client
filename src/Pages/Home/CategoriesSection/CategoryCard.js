import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    return (
        <Link to={`/category/${category.category_id}`} className='border shadow-lg rounded-xl px-5 py-4'>
            <img  className='lg:w-56 w-full lg:h-52' src={category.image} alt="" />
            <h2 className='font-semibold text-2xl text-center text-secondary mt-4'>{category.name}</h2>
        </Link>
    );
};

export default CategoryCard;