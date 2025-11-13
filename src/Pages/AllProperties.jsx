import React, { useEffect, useState } from "react";
import useAxios from "../CustomHooks/useAxios";
import PropertyCard from "../Components/PropertyCard";

const AllProperties = () => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axiosInstance
        .get("/all-properties")
        .then((data) => {
          setProperties(data.data);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }, 700);
  }, [axiosInstance]);

  if (loading)
    return (
      <div className="flex justify-center items-center text-primary min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  return (
    <section className="p-5 min-h-screen bg-base-200 container mx-auto">
      <h1 className="my-3 text-h1 text-center">
        Explore <span className="text-primary">All Properties</span>
      </h1>
      <p className="text-caption text-gray-600 text-center">
        Browse our complete collection of homes, apartments, and commercial
        spaces — carefully curated to match every lifestyle, need, and
        investment goal.
      </p>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default AllProperties;
