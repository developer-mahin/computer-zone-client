import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import BigSpinner from '../components/Spinner/BigSpinner';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <BigSpinner></BigSpinner>
    }

    if (user) {
        return children
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;