import React, { use, useRef, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const MyPropertiesCard = ({ property }) => {
  const { user } = use(AuthContext);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState("");
  const updateRef = useRef(null);
  const deleteRef = useRef();

  const handleUpdateProperty = () => {
    updateRef.current.showModal();
  };

  const handleDeleteProperty = () => {
    deleteRef.current.showModal();
  };

  return (
    <>
      <div className="bg-white p-2 md:flex md:items-center md:gap-5 rounded">
        <div className="md:w-1/3">
          <img src={property["property-image"]} className="rounded" alt="" />
        </div>
        <div className="space-y-3">
          <h3 className="text-h3">{property["property-name"]}</h3>
          <p className="capitalize text-lg text-gray-600 font-bold">
            Property:{" "}
            <span className="text-secondary">{property.category}</span>
          </p>
          <p className="font-bold text-lg text-gray-600">
            Price: <span className="text-success">{property.price}</span>
          </p>
          <p className="font-bold text-lg text-gray-600">
            Location: <span className="text-primary">{property.location}</span>
          </p>
          <p className="flex gap-2 items-center text-lg font-bold text-gray-600">
            <FaCalendar className="text-error" />{" "}
            <span>{property["posted-date"]}</span>
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-3">
            <button
              onClick={handleUpdateProperty}
              className="btn btn-success text-base-100 flex-1 md:flex-none md:w-32"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteProperty}
              className="btn btn-error text-base-100 flex-1 md:flex-none md:w-32"
            >
              Delete
            </button>
            <Link
              to={`/property/${property._id}`}
              className="btn btn-secondary text-base-100 flex-1 md:flex-none md:w-40"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* Modals */}

      <dialog
        ref={updateRef}
        className="modal modal-bottom sm:modal-middle lg:8/12"
      >
        <div className="modal-box">
          <div className="mt-5">
            <form onSubmit={``} className="p-3 space-y-5">
              <h3 className="text-h2 font-bold! text-center">
                Update Your{" "}
                <span className="text-secondary">Property Info</span>
              </h3>
              <p className="text-caption text-gray-600 text-center">
                Easily edit and keep your property listings up to date — update
                details, images, and pricing to attract the right buyers or
                renters.
              </p>
              <div className="modal-divs">
                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input outline-0 w-full"
                    defaultValue={user.displayName}
                    readOnly
                  />
                </div>

                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="input outline-0 w-full"
                    defaultValue={user.email}
                    readOnly
                  />
                </div>
              </div>

              <div className="modal-divs">
                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    🏠 Property Name
                  </label>

                  <input
                    type="text"
                    name="propertyName"
                    className="input outline-0 w-full"
                    defaultValue={property["property-name"]}
                  />
                </div>

                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    Category
                  </label>

                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    name=""
                    className="input w-full outline-0"
                  >
                    <option>Select The Category</option>
                    <option>for sale</option>
                    <option>for rental</option>
                  </select>
                  <p className="text-caption text-error">{error && error}</p>
                </div>
              </div>

              <label htmlFor="" className="labels text-subtitle">
                Short Details
              </label>
              <textarea
                name="aboutProperty"
                rows={`3`}
                className="input outline-0 w-full h-16 whitespace-pre-line"
                placeholder="Write something catchy about your property within 2 lines."
                required
              ></textarea>

              <label className="labels text-subtitle" htmlFor="">
                Description
              </label>
              <textarea
                name="description"
                rows={`5`}
                className="input outline-0 w-full h-32 whitespace-pre-line"
                placeholder="Describe your property features, nearby landmarks, and other highlights."
                required
              ></textarea>

              <div className="modal-divs">
                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    💰 Price
                  </label>

                  <input
                    type="text"
                    name="price"
                    className="input outline-0 w-full"
                    placeholder="e.g. 2500000 or 15000/month"
                    required
                  />
                </div>

                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    📍 Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    className="input outline-0 w-full"
                    placeholder="e.g. Dhanmondi, Dhaka"
                    required
                  />
                </div>
              </div>

              <div className="modal-divs">
                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    🖼️ Thumbnail
                  </label>

                  <input
                    type="text"
                    name="thumbnail"
                    className="input outline-0 w-full"
                    placeholder="Paste image URL (https://example.com/image.jpg)"
                    required
                  />
                </div>

                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    🖼️ Image Link
                  </label>

                  <input
                    type="text"
                    name="image"
                    className="input outline-0 w-full"
                    placeholder="Paste image URL (https://example.com/image.jpg)"
                    required
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center">
                <button className="btn btn-primary btn-wide text-base-100 text-lg lg:text-2xl lg:py-8">
                  Update Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      <dialog ref={deleteRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MyPropertiesCard;
