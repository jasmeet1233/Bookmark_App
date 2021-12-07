import React from 'react'
import AddLink from './AddLink';
import Navbar from './Navbar'
import SideBar from './SideBar';

const Home = () => {
    return (
      <main className= "relative h-screen ">
        <Navbar />
        <SideBar />
        <AddLink />
      </main>
    );
}

export default Home
