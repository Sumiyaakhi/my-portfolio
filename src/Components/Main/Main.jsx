import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Main = () => {
    return (
        <>
          <Header></Header>
          <Nav></Nav> 
          <About></About> 
           <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </>
    );
};

export default Main;