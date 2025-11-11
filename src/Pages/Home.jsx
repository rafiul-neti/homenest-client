import React, { useEffect, useState } from "react";
import useAxios from "../CustomHooks/useAxios";
import PropertyCard from "../Components/PropertyCard";
import WhyChooseUs from "../Components/WhyChooseUs";
import MeetOurAgents from "../Components/MeetOurAgents";

const Home = () => {
  const axiosInstance = useAxios();
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axiosInstance.get("/latest-properties").then((data) => {
      setProperties(data.data);
    });
  }, [axiosInstance]);

  return (
    <>
      <section className="container mx-auto bg-neutral">
        <h1 className="my-5 text-h1 text-center">
          Recently <span className="text-primary">Listed Properties</span>
        </h1>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </section>

      <section className="my-18 p-3 lg:p-10 why-choose text-base-200">
        <WhyChooseUs />
      </section>

      <section className="mb-18 w-11/12 lg:w-[96%] mx-auto">
        <MeetOurAgents />
      </section>
    </>
  );
};

export default Home;
