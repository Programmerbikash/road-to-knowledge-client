import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
    
    return (
        <div className='mb-20 grid grid-cols-1 md:grid-cols-2 gap-5 w-5/6 mx-auto'>
            <div>
                <h1 className="text-4xl font-bold">Upcoming Events</h1>
                <div className='hero-image'>
                    <div className="p-1 md:p-4 text-white">
                        <p className="date absolute mt-0 md:mt-2 py-2 px-4 rounded-md">23-Dec-22</p>
                        <h1 className="text-xl md:text-2xl font-bold mt-16 md:mt-32">Diversity, Education, And Student Success</h1>
                        <p className="text-justify text-sm pt-2 font-semibold">Diversity, Equity, and Student Success will focus on a critical examination of the perceptions and the realities of equity, diversity, and what it means to educate for democracy in a constantly changing educational and societal landscape. What makes DESS a priority in the list of educational events is that it invites students, educators, policymakers, and administrators to join us and to engage in these action-oriented, truth-telling conversations.</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-bold">Important Dates</h1>
                 <div className='mt-5'>
                    <div className='flex id="item1"'>
                    <div className='flex-1 mr-4 bg-gradient-to-r from-orange-500 to-orange-800 p-2 mt-4 mb-6'>
                        <p className='text-xl border-dotted border-2 border-rose-60 text-white font-bold py-1 px-2'>23-Dec-22</p>
                    </div>
                    <div className='flex-initial w-full'>
                        <h1 className="text-xl md:text-2xl font-bold">Diversity, Education, And Student Success</h1>
                        <p className="text-justify text-sm pt-2 font-semibold">Diversity, Equity, and Student Success will focus on a critical examination of the perceptions and the realities of equity, diversity, and what it means to educate for democracy in a constantly changing educational and societal landscape... </p>
                    </div>
                    </div>
                </div>
                <hr className='w-full my-2 bg-slate-500' />
                <div className='mt-5'>
                    <div className='flex'>
                    <div className='flex-1 mr-4 bg-gradient-to-r from-orange-500 to-orange-800 p-2 mt-4 mb-6'>
                        <p className='text-xl border-dotted border-2 border-rose-60 text-white font-bold py-1 px-2'>25-Dec-22</p>
                    </div>
                    <div className='flex-initial w-full'>
                        <h1 className="text-xl md:text-2xl font-bold">International Academic Multi Disciplinary Conference</h1>
                        <p className="text-justify text-sm pt-2 font-semibold">The IAMDC will help all the academicians, researchers and executives from industry to meet in a common platform to share their innovative views and ideas.... </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const MyComponent = ({ isVisible }) => (
//     <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
// )

export default UpcomingEvents;