import React from 'react';
import './StudentsTestimonial.css'
import { FcCustomerSupport, FcBusinesswoman, FcBusinessman } from 'react-icons/fc';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const StudentsTestimonial = () => {
    return (
        <div className='mb-20'>
            <h4 className="text-xl font-bold text-center text-stone-500">#Testimonial</h4>
            <h1 className="text-5xl font-bold text-center">What Students Says</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 mt-14'>
                <div className='outline hover:text-white bg-white hover:bg-cyan-300 p-5 outline-cyan-300 shadow-xl rounded-lg'>
                    <FcCustomerSupport className='mx-auto mb-3 text-7xl' />
                    <p className='text-center font-semibold'><FaQuoteLeft className='mr-1 inline text-2xl'/> To be honest , this was my first online class. I am looking forward to taking more online classes. The experience of this class has being nothing but positive. I thought the coarse outline/power point was extremely helpful. The homework, quizzes and test were reasonable... <FaQuoteRight className='ml-1 inline text-2xl'/></p>
                    <h3 className="text-2xl text-center pt-5 font-bold">James Joyce</h3>
                    <h5 className="text-md text-center">Self-improvement Student</h5>
                </div>
                <div className='outline hover:text-white bg-white hover:bg-cyan-300 p-5 outline-cyan-300 shadow-xl rounded-lg'>
                    <FcBusinesswoman className='mx-auto mb-3 text-7xl' />
                    <p className='text-center font-semibold'><FaQuoteLeft className='mr-1 inline text-2xl'/> I really enjoyed this class and the format it was presented in. For me, I learn and retain much more through an online class due to the fact you can do the course as an ¡§open book.¡¨ This really makes me search for the answer and in return, I retain more information... <FaQuoteRight className='ml-1 inline text-2xl'/></p>
                    <h3 className="text-2xl text-center pt-5 font-bold">Gustave Flaubert</h3>
                    <h5 className="text-md text-center">Life Coaching Student</h5>
                </div>
                <div className='outline hover:text-white bg-white hover:bg-cyan-300 p-5 outline-cyan-300 shadow-xl rounded-lg'>
                    <FcBusinessman className='mx-auto mb-3 text-7xl' />
                    <p className='text-center font-semibold'><FaQuoteLeft className='mr-1 inline text-2xl'/> I will say I learned quite a bit in this course, I also enjoyed myself…. So that says something.  The assignments were very beneficial to the entire learning process.  However, I felt the tests were a bit unexpected, some material was not discussed thoroughly enough...  <FaQuoteRight className='ml-1 inline text-2xl'/></p>
                    <h3 className="text-2xl text-center pt-5 font-bold">Charles Dickens</h3>
                    <h5 className="text-md text-center">Mental Health Student</h5>
                </div>
            </div>
        </div>
    );
};

export default StudentsTestimonial;