import React from 'react';
import './CourseSummary.css';
import { TfiBlackboard, TfiCup } from 'react-icons/tfi';
import { ImManWoman } from 'react-icons/im';
import { IoIosBook } from 'react-icons/io';

const CourseSummary = () => {
    return (
        <div className='mb-20 w-full'>
            <h1 className="text-4xl font-bold text-center">Course Summary</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 pt-10 bg-image text-white h-60 md:h-40'>
                <div className='flex mx-auto'>
                    <TfiBlackboard className='mr-2 mt-2 text-5xl'/>
                    <h2 className="text-3xl font-bold">06 <br /> Teachers</h2>
                </div>
                <div className='flex mx-auto'>
                    <ImManWoman className='mr-2 mt-2 text-5xl'/>
                    <h2 className="text-3xl font-bold">400 + <br /> Students</h2>
                </div>
                <div className='flex mx-auto'>
                    <IoIosBook className='mr-2 mt-2 text-5xl'/>
                    <h2 className="text-3xl font-bold">07 <br /> Courses</h2>
                </div>
                <div className='flex mx-auto'>
                    <TfiCup className='mr-2 mt-2 text-5xl'/>
                    <h2 className="text-3xl font-bold">04 <br /> Years Exp.</h2>
                </div>
            </div>
        </div>
    );
};

export default CourseSummary;