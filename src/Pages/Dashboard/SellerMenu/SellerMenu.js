import React from 'react';
import { Link } from 'react-router-dom';

const SellerMenu = () => {
    return (
        <Link className="font-semibold" to="/dashboard">
            Seller
        </Link>
    );
};

export default SellerMenu;