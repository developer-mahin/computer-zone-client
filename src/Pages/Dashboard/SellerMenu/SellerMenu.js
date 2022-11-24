import React from 'react';
import { Link } from 'react-router-dom';

const SellerMenu = () => {
    return (
        <ul className=''>
            <li>
                <Link className="font-semibold block" to="/dashboard/add-product">
                    Add A product
                </Link>
            </li>
            <li>
                <Link className="font-semibold block" to="/dashboard/my-product">
                    My Product
                </Link>
            </li>
        </ul>
    );
};

export default SellerMenu;