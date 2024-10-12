import React from "react";
import HamburgerMenu from './Header';
import UncontrolledExample from './Carousel';
import Services from "./Services";
import About from './About';
import Insurance from "./Insurance";
import Whytochoose from "./Whytochoose";
import Content from "./Content";
import Contact from "./Contact";
import Footer from "./Footer";

function Home(){
    return(
        <div>
            <HamburgerMenu />
            <UncontrolledExample />
            <Services />
            <About />
            <Insurance />
            <Whytochoose />
            <Content />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;