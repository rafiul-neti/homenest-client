import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <section>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </section>
  );
};

export default HomeLayout;
