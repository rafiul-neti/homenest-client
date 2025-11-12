import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../CustomHooks/useAxios";
import { IoLocation } from "react-icons/io5";

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
    <section className="container mx-auto flex flex-col lg:flex-row gap-5 p-2 lg:p-0">
      <div className="flex-1">
        <img src={singleProperty["property-image"]} alt="" />
      </div>
      <div className="flex-1 space-y-7">
        <h1 className="text-h1 text-gray-700">
          {singleProperty["property-name"]}
        </h1>

        <p className="text-body font-bold! flex gap-2 items-center">
          <IoLocation className="text-primary" />
          <span className="text-gray-600 font-medium!">
            {singleProperty.location}
          </span>
        </p>

        <p className="text-primary font-bold!">
          <span className="font-bold! text-3xl">{singleProperty.price}</span>
        </p>

        <p className="text-gray-600 text-body">{singleProperty.description}</p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 space-y-2 md:space-y-0">
          <p className="font-bold! flex flex-col lg:flex-row lg:gap-2">
            <span>Property:</span>
            <span className="capitalize text-error font-semibold!">
              {singleProperty.category}
            </span>
          </p>
          <p className="font-bold! flex flex-col lg:flex-row lg:gap-2">
            <span>Posted Date:</span>
            <span className="text-success">
              {singleProperty["posted-date"]}
            </span>
          </p>
          <p className="font-bold! flex flex-col lg:flex-row lg:gap-2">
            <span>Posted by:</span>
            <span className="text-error">{singleProperty["posted-by"]}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
