import React from 'react';
import { useQuery } from '@tanstack/react-query'
import CategoryCard from './CategoryCard';


const CategoriesSection = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/categories")
            const data = await res.json()
            return data;
        }
    })

    console.log(categories);

    return (
        <div className='lg:py-14 py-6 container mx-auto'>
            <h2 className='text-center text-3xl font-bold'>Explore By Category</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-9'>
                {
                    categories.map(category => <CategoryCard
                    
                        key={category._id}
                        category={category}

                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesSection;