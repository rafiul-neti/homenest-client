import React, { useEffect, useState } from "react";
import useAxios from "../CustomHooks/useAxios";
import PropertyCard from "../Components/PropertyCard";

const Home = () => {
  const axiosInstance = useAxios();
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axiosInstance.get("/latest-properties").then((data) => {
      console.log(data.data);
      setProperties(data.data);
    });
  }, [axiosInstance]);

  return (
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
  );
};

export default Home;
