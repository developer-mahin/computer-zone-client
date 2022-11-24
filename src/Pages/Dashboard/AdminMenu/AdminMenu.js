import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <Link className="font-semibold" to="/dashboard">
            Admin
        </Link>
    );
};

export default AdminMenu;