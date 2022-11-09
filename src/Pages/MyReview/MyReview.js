import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    // const myReview = useLoaderData();
    const { user } = useContext(AuthContext);
    const [service, setService] = useState([]);
    useTitle('MyReview')

    return (
        <div className='mt-20 mb-10'>
            <h1 className="text-9xl">My Review</h1>
        </div>
    );
};

export default MyReview;