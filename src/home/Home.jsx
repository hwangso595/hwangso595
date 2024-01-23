import React from "react";
import { useState, useEffect } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Work from "./Work";
import Contact from "./Contact";
// import { register } from "swiper/element/bundle";
// register();

const Home = ({setIsDropdownOpen}) => {

    return (
        <>
            <About />
            <Portfolio setIsDropdownOpen={setIsDropdownOpen} limit={3}/>
            <Work />
            <Contact />
        </>
    );
};

export default Home;
