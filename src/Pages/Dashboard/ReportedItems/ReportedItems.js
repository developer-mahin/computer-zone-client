import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BigSpinner from '../../../components/Spinner/BigSpinner';
import SingleReportItem from './SingleReportItem';

const ReportedItems = () => {
    const [loading, setLoading] = useState(false)

    const { data: allReportedItems = [], refetch } = useQuery({
        queryKey: ["allReportedItems"],
        queryFn: async () => {
            setLoading(true)
            const res = await fetch("http://localhost:5000/reported-items", {
                headers: {
                    authorization: `bearer ${localStorage.getItem("access-token")}`
                }
            })
            const data = await res.json()
            setLoading(false)
            return data;
        }
    })

    console.log(allReportedItems);

    return (
        <>

            {
                loading ? <BigSpinner></BigSpinner> : <>

                    {
                        allReportedItems.length ? <>

                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <thead className='border-b-2 border-gray-300'>
                                        <tr>
                                            <th>
                                                <label>
                                                    No.
                                                </label>
                                            </th>
                                            <th>Product Image</th>
                                            <th>Product Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            allReportedItems.map((item, index) => <SingleReportItem

                                                index={index}
                                                key={item._id}
                                                item={item}
                                                refetch={refetch}
                                            ></SingleReportItem>)
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </>
                            :

                            <>
                                <h2 className='flex justify-center items-center text-2xl text-gray-300'>There are no reported items here</h2>
                            </>
                    }

                </>
            }

        </>
    );
};

export default ReportedItems;