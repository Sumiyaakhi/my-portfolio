import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub,FaFacebook } from 'react-icons/fa';

const HeaderSocial = () => {
    return (
        <div className=' absolute  bottom-12   '>
           <div className='my-2'> 
           <Link className='' to="https://www.linkedin.com/in/sumiya-akhi-803b4127b/" ><FaLinkedin className='text-sky-500 w-6 h-6 '></FaLinkedin></Link>
           </div>
           <div className='my-2'>
           <Link to='https://github.com/Sumiyaakhi'><FaGithub className='text-sky-500 w-6 h-6'></FaGithub></Link>
           </div>
           <Link to='https://www.facebook.com/sumiyaakhi93/'><FaFacebook className='text-sky-500 w-6 h-6'></FaFacebook></Link>
        </div>
    );
};

export default HeaderSocial;