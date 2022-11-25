import React from 'react';
import toast from 'react-hot-toast';

const TableContent = ({ data, index, refetch }) => {
    const { email, image, name, location, _id } = data

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteAPerson/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Successfully deleted this user")
                    refetch()
                }
            })
    }

    return (
        <>
            <tr>
                <th>
                    <label>
                        {index + 1}
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded-full w-20 h-20">
                                <img src={image} alt="Forbidden" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{location}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span>{email}</span>
                </td>
                <td>
                    <button onClick={() => handleDelete(_id)} className='btn bg-red-600 border-none text-white btn-xs'>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default TableContent;