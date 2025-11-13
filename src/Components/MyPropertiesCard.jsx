import React from "react";

const MyPropertiesCard = ({ property }) => {
  return (
    <div className="bg-white p-2 md:flex md:items-center md:gap-5 rounded">
      <div className="md:w-1/3">
        <img src={property["property-image"]} className="rounded" alt="" />
      </div>
      <div className="">
        <h3 className="text-h3">{property["property-name"]}</h3>
        <p>{property.category}</p>
        <p>{property.price}</p>
        <p>{property.location}</p>
        <p>{property["posted-date"]}</p>

        <div className="">
          <button>Edit</button>
          <button>Delete</button>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default MyPropertiesCard;
