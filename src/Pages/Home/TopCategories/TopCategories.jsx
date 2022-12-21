import React from 'react';
import './TopCategories.css';
import { MdSelfImprovement, MdConnectWithoutContact } from 'react-icons/md';
import { FcReading } from 'react-icons/fc';
import { GiLifeSupport } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { IoMdTime } from 'react-icons/io';

const TopCategories = () => {
    return (
        <div>
            <h4 className="text-xl font-bold text-center text-stone-500">#Top categories</h4>
            <h1 className="text-5xl font-bold text-center">Popular Subjects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 w-5/6 mx-auto mt-20 gap-5">
                <div className='outline hover:text-white bg-white hover:bg-cyan-300 p-5 outline-cyan-300 shadow-xl rounded-lg flex'>
                    <FcReading className='mr-3 mt-2 text-5xl'/>
                    <div>
                        <h1 className="text-xl font-bold">Self-improvement</h1>
                        <p>1 Course</p>
                    </div>
                </div>
                <div className='outline hover:text-white bg-white hover:bg-cyan-300 p-5 outline-cyan-300 shadow-xl rounded-lg flex'>
                    <GiLifeSupport className='mr-3 mt-2 text-5xl'/>
                    <div>
                        <h1 className="text-xl font-bold">Life Coaching</h1>
                        <p>1 Course</p>
                    </div>
                </div>
                <div className='outline hover:text-white bg-white hover:bg-cyan-300 p-5 outline-cyan-300 shadow-xl rounded-lg flex'>
                    <MdConnectWithoutContact className='mr-3 mt-2 text-5xl'/>
                    <div>
                        <h1 className="text-xl font-bold">Interpersonal Communication</h1>
                        <p>1 Course</p>
                    </div>
                </div>
                <div className='outline hover:text-white bg-white hover:bg-cyan-300 p-5 outline-cyan-300 shadow-xl rounded-lg flex'>
                    <MdSelfImprovement className='mr-3 mt-2 text-5xl'/>
                    <div>
                        <h1 className="text-xl font-bold">Meditation</h1>
                        <p>1 Course</p>
                    </div>
                </div>
                <div className='outline hover:text-white bg-white hover:bg-cyan-300 p-5 outline-cyan-300 shadow-xl rounded-lg flex'>
                    <RiMentalHealthFill className='mr-3 mt-2 text-5xl'/>
                    <div>
                        <h1 className="text-xl font-bold">Mental Health</h1>
                        <p>1 Course</p>
                    </div>
                </div>
                <div className='outline hover:text-white bg-white hover:bg-cyan-300 p-5 outline-cyan-300 shadow-xl rounded-lg flex'>
                    <IoMdTime className='mr-3 mt-2 text-5xl'/>
                    <div>
                        <h1 className="text-xl font-bold">Time management</h1>
                        <p>1 Course</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;