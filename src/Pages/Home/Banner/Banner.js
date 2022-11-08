import React from "react";
import { Link } from "react-router-dom";
import banner from '../../../assets/images/banner2.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="md:w-2/5 w-full h-screen rounded-lg shadow-2xl"
          alt=""
        />
        <div className="w-full">
          <h1 className="text-5xl font-extrabold">English mentoring!</h1>
          <p className="py-6 text-3xl font-semibold">
          If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people.
          </p>
          <p className="text-xl pb-10 font-semibold">Knowledge is food for thought, and while food is perishable, thoughts persist. Teachers feed the whole world, many times over.</p>
          <p className="text-xl font-bold text-center mb-5"> - Chinese Proverb</p>
          <hr className="mb-10" />
          
          <div className="grid grid-cols-2 gap-4">
          <Link><button className="btn btn-primary w-32 text-center md:ml-24">Contact Me</button></Link>
          <Link><button className="btn btn-primary w-32 mx-auto md:ml-24">About Me</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
