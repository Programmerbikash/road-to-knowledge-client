import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailService = () => {
    const service = useLoaderData();
    // console.log(service);
    const { title, description, image, price, rating } = service;

    return (
        <div className='mt-20 mb-10'>
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className="text-xl">{description}</p>
        </div>
    );
};

export default DetailService;