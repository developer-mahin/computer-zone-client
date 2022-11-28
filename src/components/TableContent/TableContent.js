import React, { useState } from 'react';
import toast from 'react-hot-toast';

const TableContent = ({ data, index, refetch }) => {
    const { email, image, name, location, _id, verify, verifyStatus } = data
    const [loading, setLoading] = useState(false)


    const handleDelete = (id) => {
        fetch(`https://computer-zone-server.vercel.app/deleteAPerson/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("access-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Successfully deleted this user")
                    refetch()
                }
            })
    }

    const handleVerifyUser = (email) => {
        setLoading(true)
        fetch(`https://computer-zone-server.vercel.app/verify-users/${email}`, {
            method: "PATCH",
            headers: {
                authorization: `bearer ${localStorage.getItem("access-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("user verify succeed")
                    setLoading(false)
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
                    <label
                        onClick={() => handleVerifyUser(email)}
                        disabled={verifyStatus === "Verified" || verify}
                        className='bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-lg text-black px-6 py-2 font-semibold hover:rounded-full btn-sm cursor-pointer'
                    >
                        {
                            loading ? <> <span>Loading...</span>
                            </> : `${verifyStatus ? verifyStatus : "unverified"}`
                        }
                    </label>
                </td>
                <td>
                    <label
                        // onClick={() => setId(_id)}
                        onClick={() => handleDelete(_id)}
                        // htmlFor="delete-modal"
                        className='btn bg-red-600 border-none text-white btn-sm'
                    >
                        Delete
                    </label>
                </td>
            </tr>
            {/* <DeleteModalBody */}
            {/* data={data} */}
            {/* // id={id} */}
            {/* // handleDelete={handleDelete} */}
            {/* // ></DeleteModalBody> */}

        </>
    );
};

export default TableContent;