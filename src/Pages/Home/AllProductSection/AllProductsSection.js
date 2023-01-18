import React, { useState } from 'react';
import { useEffect } from 'react';
import BigSpinner from '../../../components/Spinner/BigSpinner';
import SingleProductSection from './SingleProductSection';

const AllProductsSection = () => {
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [size, setSize] = useState(4)

    useEffect(() => {
        setLoading(true)
        const url = `https://computer-zone-server.vercel.app/products?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setCount(data.count)
                setLoading(false)
            })

    }, [page, size])

    
    const pages = Math.ceil(count / size)


    return (
        <>
            {
                loading ? <BigSpinner></BigSpinner> : <>
                    <div className='container mx-auto lg:py-14 py-8 px-3'>
                        <div className=" text-center">
                            <div className="">
                                <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                                    PRODUCTS
                                </p>
                                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                                    Get your favorite laptop
                                </h2>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-9'>
                            {
                                products?.map(product => <SingleProductSection

                                    key={product._id}
                                    product={product}

                                ></SingleProductSection>)
                            }
                        </div>
                    </div>
                </>
            }

            <div className='text-center lg:pb-10 pb-4'>
                <>
                    {
                        !pages.length && [...Array(pages).keys()]?.map(number => <button
                            key={number}
                            className={page === number ? "bg-primary px-2 py-1 text-white font-semibold mx-2 rounded" : "bg-secondary px-2 py-1 text-white font-semibold mx-2 rounded"}
                            onClick={() => setPage(number)}
                        >
                            {number + 1}
                        </button>)
                    }
                </>
                <>
                    <select
                       
                        onChange={(e) => setSize(e.target.value)}
                        className='bg-secondary px-2 py-1 text-white font-semibold mx-2 rounded'
                    >
                        <option defaultValue={4}>4</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                    </select>
                </>
            </div>
        </>
    );
};

export default AllProductsSection;