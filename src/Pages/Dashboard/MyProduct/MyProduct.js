import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyProductsCard from './MyProductsCard';

const MyProduct = () => {
    const { user } = useContext(AuthContext)

    const { data: allProducts = [], refetch } = useQuery({

        queryKey: ["getAllProducts", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-product?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("access-token")}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className="p-6 ">
            <div className='container mx-auto py-9'>
                <div className="">
                    <p className="inline-block px-3 py-px font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        My products
                    </p>
                    <h2 className="text-3xl capitalize font-bold">
                        See Your products
                    </h2>
                </div>
            </div>

            {
                allProducts.map(product => <MyProductsCard

                    refetch={refetch}
                    key={product._id}
                    product={product}

                ></MyProductsCard>)
            }

        </div>
    );
};

export default MyProduct;