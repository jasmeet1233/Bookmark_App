import React from "react";
import AddLink from "./AddLink";
import Filter from "./Filter";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <main className="relative h-screen">
      <Navbar />
      <div className="flex h-screen">
        <SideBar />
        <AddLink />
      </div>
    </main>
  );
};

export default Home;
