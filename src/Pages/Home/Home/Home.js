import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Feature from '../Feature/Feature';
import Service from '../Service/Service';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Experience></Experience>
            <Service></Service>
        </div>
    );
};

export default Home;