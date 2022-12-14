import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';


const CategoriesSection = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("https://computer-zone-server.vercel.app/categories")
            const data = await res.json()
            return data;
        }
    })


    return (
        <div className='lg:py-14 py-10 container mx-auto'>
            <div className=" text-center">
                <div className="">
                    <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        CATEGORIES
                    </p>
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        Explore By Category
                    </h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-9 px-3'>
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