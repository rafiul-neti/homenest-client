import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import useAxios from "../CustomHooks/useAxios";
import MyPropertiesCard from "../Components/MyPropertiesCard";

const MyProperties = () => {
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  const [myProperties, setMyProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axiosInstance
        .get(`/my-properties?email=${user.email}`)
        .then((data) => {
          setMyProperties(data.data);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }, 700);
  }, [axiosInstance, user.email]);

  if (loading)
    return (
      <div className="flex justify-center items-center text-primary min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  return (
    <section className="container mx-auto min-h-screen">
      <h1 className="mt-5 text-h1 text-center">
        Manage Your <span className="text-primary">Listed Properties</span>
      </h1>
      <p className="mt-2 mb-7 text-caption text-gray-600 text-center">
        View, edit, or remove your property listings effortlessly — keep your
        portfolio up to date and attract the right buyers or renters.
      </p>

      <div className="bg-base-300 p-4">
        {myProperties.map((property) => (
          <MyPropertiesCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default MyProperties;
