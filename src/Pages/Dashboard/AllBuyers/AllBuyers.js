import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TableContent from '../../../components/TableContent/TableContent';

const AllBuyers = () => {

    const { data: allBuyers = [], refetch } = useQuery({

        queryKey: ["allBuyers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/myUsers?userRole=buyer", {
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
                allBuyers.length > 0 ? <>
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
                                    (allBuyers.length) && allBuyers?.map((buyer, index) => <TableContent
                                        key={buyer._id}
                                        data={buyer}
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
                        <h2 className='text-center h-screen flex items-center justify-center text-4xl font-bold capitalize'>There is no Buyers </h2>
                    </>

            }
        </>
    );
};

export default AllBuyers;