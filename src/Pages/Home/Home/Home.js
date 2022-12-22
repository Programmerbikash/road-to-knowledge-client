import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import CourseSummary from '../CourseSummary/CourseSummary';
import Experience from '../Experience/Experience';
import Feature from '../Feature/Feature';
import Service from '../Service/Service';
import StudentsTestimonial from '../StudentsTestimonial/StudentsTestimonial';
import TopCategories from '../TopCategories/TopCategories';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

const Home = () => {
    useTitle('Home')
    return (
        <div className=''>
            <Banner></Banner>
            <Feature></Feature>
            <Experience></Experience>
            <TopCategories></TopCategories>
            <Service></Service>
            <UpcomingEvents></UpcomingEvents>
            <CourseSummary></CourseSummary>
            <StudentsTestimonial></StudentsTestimonial>
        </div>
    );
};

export default Home;