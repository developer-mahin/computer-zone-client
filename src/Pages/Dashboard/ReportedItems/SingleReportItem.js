import React, { useState } from 'react';
import toast from 'react-hot-toast';

const SingleReportItem = ({ item, index,refetch }) => {
    const { picture, name, productId, resale_price, } = item;
    const [loading, setLoading] = useState(false)

    const handleDeleteItem = (id) => {
        setLoading(true)
        fetch(`http://localhost:5000/reportsItem/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("access-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("successfully delete the product")
                    setLoading(false)
                    refetch()
                }
            })
            .catch(err => {
                toast.error(err.message)
                setLoading(false)
            })

    }


    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-full w-16 h-16">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">Resale Price: {resale_price}</span>
            </td>
            <th>
                <button
                    onClick={() => handleDeleteItem(productId)}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-lg text-black font-semibold hover:rounded-full btn-xs"
                >
                    {loading ? <p>Loading..</p> : "Delete"}
                </button>
            </th>
        </tr>
    );
};

export default SingleReportItem;