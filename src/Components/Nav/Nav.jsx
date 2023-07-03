import React from 'react';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import './Nav.css'
import {  NavHashLink } from 'react-router-hash-link';

const Nav = () => {
    return (
      
          <nav className='flex gap-8 rounded-2xl py-5 px-20'>
            <NavHashLink 
             
             activeStyle={{ backgroundColor: 'red' }}
            className='text-slate-400' to='#' smooth><AiOutlineHome></AiOutlineHome></NavHashLink>

            <NavHashLink   className='text-slate-400' to='#about'
            smooth><AiOutlineUser></AiOutlineUser></NavHashLink>

            <NavHashLink  className='text-slate-400' 
            smooth
            to='#skills'><BiBook></BiBook></NavHashLink>

            <NavHashLink  className='text-slate-400' smooth to='#projects'><RiServiceLine></RiServiceLine></NavHashLink>

            <NavHashLink   className='text-slate-400' 
            smooth 
            to='#contact'><BiMessageSquareDetail></BiMessageSquareDetail></NavHashLink>
            
          </nav>
    );
};

export default Nav;