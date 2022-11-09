import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import AllServices from "../Home/AllServices/AllServices";

const Services = () => {
  const [services, setServices] = useState([]);
  useTitle('Services')

    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => {
          setServices(data);
          // console.log(data);
        });
    }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-16">
          <h1 className="sm:text-xl text-2xl font-medium title-font text-gray-900 mb-4">
            All Services
          </h1>
          <p className="text-5xl font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            What I Do?
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            services.map(service => <AllServices service={service} key={service.category_id}></AllServices>)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
