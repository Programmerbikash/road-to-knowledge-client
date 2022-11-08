import React from 'react';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Feature from '../Feature/Feature';
import Service from '../Service/Service';

const Home = () => {
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