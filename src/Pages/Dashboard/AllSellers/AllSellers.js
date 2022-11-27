import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TableContent from '../../../components/TableContent/TableContent';

const AllSellers = () => {

    const { data: allSellers = [], refetch } = useQuery({

        queryKey: ["allSellers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/myUsers?userRole=seller", {
                headers: {
                    authorization: `bearer ${localStorage.getItem("access-token")}`
                }
            })
            const data = await res.json()
            return data;
        }

    })



    return (
        <>
            {
                allSellers.length > 0 ? <>

                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            No.
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allSellers.length && allSellers?.map((seller, index) => <TableContent
                                        key={seller._id}
                                        data={seller}
                                        index={index}
                                        refetch={refetch}
                                    ></TableContent>)
                                }

                            </tbody>


                        </table>

                    </div>

                </>

                    :

                    <>
                        <h2 className='text-center h-screen flex items-center justify-center text-4xl font-bold capitalize text-white'>There is no Sellers </h2>
                    </>
            }
        </>
    );
};

export default AllSellers;