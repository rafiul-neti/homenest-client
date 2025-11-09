import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <section>
      <p className="my-5">Navbar</p>
      <div className="">
        <Outlet />
      </div>
    </section>
  );
};

export default HomeLayout;
