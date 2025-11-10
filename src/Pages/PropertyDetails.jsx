import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../CustomHooks/useAxios";

const PropertyDetails = () => {
  const [singleProperty, setSingleProperty] = useState({});
  const { id } = useParams();
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get(`/property/${id}`).then((data) => {
      console.log(data.data);
      setSingleProperty(data.data);
    });
  }, [axiosInstance, id]);

  return (
    <section className="container mx-auto flex gap-5">
      <div className="flex-1">
        <img src={singleProperty["property-image"]} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-h1">
            {singleProperty["property-name"]}
        </h1>
        <p>
            {singleProperty.description}
        </p>
      </div>
    </section>
  );
};

export default PropertyDetails;
