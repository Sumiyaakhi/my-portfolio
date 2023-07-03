import React from 'react';
import CTA from './CTA';
import Typed from "react-typed";
import image from '../../assets/mypic.jpg'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <div className='container text-center py-16 space-y-3'>
          <div className='md:flex items-center'>
          <div className='md:w-1/2'>
           <h5 className=' text-2xl  text-white font-semibold'>Hello I'm</h5> 
           <h1 className=' text-5xl text-white font-bold py-5'>Sumiya Akter Akhi</h1>
           <div>
           <Typed 
           className='text-slate-400  text-2xl font-bold'
        strings={[" MERN stack developer", "Full stack developer ", "React Developer"]}
        typeSpeed={80}
        backSpeed={80}
        loop
      />
           </div>
           <CTA></CTA>
           </div>

           {/* image  */}
           <div className='flex justify-center md:w-1/2'>
           <img className='h-[500px] w-[260px] rounded-3xl' src={image} alt="" />
           </div>

          </div>
          <div>
          <a href="#contact" className='absolute right-0 bottom-20 transform rotate-90 text-sky-500' >scroll Down  </a>
            </div>
           <HeaderSocial></HeaderSocial>
        </div>
    );
};

export default Header;