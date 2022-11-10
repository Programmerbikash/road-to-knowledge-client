import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    // For loading
    if (loading) {
        return <h1 className="text-5xl font-bold">Loading...</h1>;
    }

    // Have user or not condition
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
    
};

export default PrivateRouter;