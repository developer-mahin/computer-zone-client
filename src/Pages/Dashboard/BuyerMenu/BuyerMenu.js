import React from 'react';
import { Link } from 'react-router-dom';

const BuyerMenu = () => {
    return (
        <Link className="font-semibold" to="/dashboard/my-orders">
            My Orders
        </Link>
    );
};

export default BuyerMenu;