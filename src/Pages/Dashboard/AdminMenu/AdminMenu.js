import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <ul>
            <li>
                <Link className="font-semibold" to="/dashboard/all-sellers">
                    All Sellers
                </Link>
            </li>
            <li>
                <Link className="font-semibold" to="/dashboard/all-buyers">
                    All Buyers
                </Link>
            </li>
        </ul>
    );
};

export default AdminMenu;