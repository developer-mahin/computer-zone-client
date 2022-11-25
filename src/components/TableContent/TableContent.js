import React from 'react';

const TableContent = ({data, index}) => {
    const {email, image, name} = data

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
                        <div className="rounded-full w-20 h-20">
                            <img src={image} alt="Forbidden" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>
                <button className='btn bg-red-600 border-none text-white btn-xs'>Delete</button>
            </td>
        </tr>
    );
};

export default TableContent;