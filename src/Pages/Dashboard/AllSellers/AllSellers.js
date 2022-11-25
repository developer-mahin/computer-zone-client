import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TableContent from '../../../components/TableContent/TableContent';

const AllSellers = () => {

    const { data: allSellers = [] } = useQuery({

        queryKey: ["allSellers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/myUsers?userRole=seller")
            const data = await res.json()
            return data;
        }

    })



    return (
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
                        allSellers.map((seller, index) => <TableContent
                        
                            key={seller._id}
                            data={seller}
                            index={index}
                        ></TableContent>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default AllSellers;