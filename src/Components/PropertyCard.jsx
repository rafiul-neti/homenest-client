import React from "react";
import { Link } from "react-router";

const PropertyCard = ({ property }) => {
  console.log(property);
  return (
    <div className="p-1 bg-base-100 shadow-lg">
      <div className="w-[315px]">
        <img
          src={property["property-image"]}
          className="object-contain overflow-hidden"
          alt=""
        />
      </div>
      <div className="">
        <div className="bg-neutral flex">
          <p className="w-1/3 bg-secondary font-semibold text-base-100 p-3 text-center capitalize">
            {property.category}
          </p>
          <p className="w-2/3 text-center font-semibold p-3 hover:bg-success hover:text-base-100 duration-300 ease-in-out">
            {property.price}
          </p>
        </div>
        <div className="text-center">
          <h2>{property.location}</h2>
          <h3>{property["property-name"]}</h3>
          <p className="text-justify text-gray-700">{property["about-property"]}</p>
        </div>
      </div>
      <Link
        to={`/property/${property._id}`}
        className="mt-3 btn btn-primary text-lg text-base-100 btn-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default PropertyCard;
