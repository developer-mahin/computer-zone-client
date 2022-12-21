import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyProductsCard from './MyProductsCard';

const MyProduct = () => {
    useTitle("My-Products")
    const { user, logOut } = useContext(AuthContext)

    const { data: allProducts = [], refetch } = useQuery({

        queryKey: ["getAllProducts", user?.email],
        queryFn: async () => {
            const res = await fetch(`https://computer-zone-server.vercel.app/my-product?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("access-token")}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                return logOut()
                    .then(() => { })
                    .then((err) => {
                        toast.message(err.message)
                    })
            }
            const data = await res.json()
            return data;
        }
    })

    return (
        <>

            {
                allProducts.length > 0 ? <>

                    <div className="p-6 bg-[#1e2b47]">
                        <div className='container mx-auto py-9'>
                            <div className="">
                                <p className="inline-block px-3 py-px font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                                    My products
                                </p>
                                <h2 className="text-3xl capitalize font-bold text-gray-300">
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

                </> :

                    <>
                        <h2 className='flex justify-center items-center h-screen text-2xl text-gray-300'>You do not added any product. first <Link className='text-blue-300 ml-2 hover:underline' to="/dashboard/add-product"> add product</Link></h2>
                    </>
            }

        </>
    );
};

export default MyProduct;