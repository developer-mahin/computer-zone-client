import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TableContent from '../../../components/TableContent/TableContent';

const AllBuyers = () => {

    const { data: allBuyers = [] } = useQuery({

        queryKey: ["allBuyers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/myUsers?userRole=buyer")
            const data = await res.json()
            return data;
        }

    })

    console.log(allBuyers)

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
                        allBuyers.map((buyer, index) => <TableContent
                            key={buyer._id}
                            data={buyer}
                            index={index}
                        ></TableContent>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default AllBuyers;