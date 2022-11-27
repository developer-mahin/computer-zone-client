import React from 'react';

const DeleteModalBody = ({ data, id }) => {
    const { name, _id } = data;
    // console.log(id)


    //     const handleDelete = (id) => {
    //     console.log(id);
    //     // fetch(`http://localhost:5000/deleteAPerson/${id}`, {
    //     //     method: "DELETE",
    //     //     headers: {
    //     //         authorization: `bearer ${localStorage.getItem("access-token")}`
    //     //     }
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         if (data.deletedCount > 0) {
    //     //             console.log(data)
    //     //             toast.success("Successfully deleted this user")
    //     //             refetch()
    //     //         }
    //     //     })
    // }

    return (
        <>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do you want to delete {name}</h3>
                    <div className='mt-4'>
                        <button
                            // onClick={() => handleDelete(id)}
                            className='btn btn-sm bg-red-600 border-none text-white mr-4'
                        >
                            Delete
                        </button>
                        <label
                            htmlFor="delete-modal"
                            className='btn btn-sm bg-black border-none text-white'
                        >
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteModalBody;