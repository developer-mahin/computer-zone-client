import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    console.log(typeof(category.category_id));

    return (
        <Link to={`/category/${category.category_id}`} className='border shadow-lg rounded-xl px-5 py-4'>
            <img  className='w-56 h-52 hover:animate-bounce hover:ease-in hover:duration-300 hover:transition  ' src={category.image} alt="" />
            <h2 className='font-semibold text-2xl text-center text-secondary mt-4'>{category.name}</h2>
        </Link>
    );
};

export default CategoryCard;