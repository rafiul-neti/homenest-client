import React from "react";

const BannerSlider = () => {
  return (
    <div>
      <div className="carousel w-full h-[75vh]">
        <div id="item1" className="sliders hero-bg-1">
          <div className="overlay"></div>
          <div className="text-base-100 z-50 text-center space-y-5">
            <h1 className="text-h1">Modern Luxury Apartments</h1>
            <p className="text-body text-gray-200">
              Experience urban living at its finest with modern architecture,
              premium finishes, and convenient access to everything your
              lifestyle demands.
            </p>
            <button className="btn btn-primary rounded-md! text-base-100 btn-wide text-lg">
              Get Started
            </button>
          </div>
        </div>

        <div id="item2" className="sliders hero-bg-2">
          <div className="overlay"></div>
          <div className="text-base-100 z-50 text-center space-y-5">
            <h1 className="text-h1">Elegant Family Homes</h1>
            <p className="text-body text-gray-200">
              Find the perfect balance of space, comfort, and community in
              beautifully designed homes made for families who value peace and
              connection.
            </p>
            <button className="btn btn-primary rounded-md! text-base-100 btn-wide text-lg">
              Get Started
            </button>
          </div>
        </div>

        <div id="item3" className="sliders hero-bg-3">
          <div className="overlay"></div>
          <div className="text-base-100 z-50 text-center space-y-5">
            <h1 className="text-h1">Prime Commercial Spaces</h1>
            <p className="text-body text-gray-200">
              Empower your business with modern commercial properties
              strategically located in thriving areas designed to inspire
              productivity and long-term success.
            </p>
            <button className="btn btn-primary rounded-md! text-base-100 btn-wide text-lg">
              Get Started
            </button>
          </div>
        </div>

        <div id="item4" className="sliders hero-bg-4">
          <div className="overlay"></div>
          <div className="text-base-100 z-50 text-center space-y-5">
            <h1 className="text-h1">Coastal View Residences</h1>
            <p className="text-body text-gray-200">
              Wake up to breathtaking ocean views and enjoy luxurious living
              surrounded by nature, serenity, and timeless architectural
              elegance.
            </p>
            <button className="btn btn-primary rounded-md! text-base-100 btn-wide text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default BannerSlider;
