import React from 'react';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <div className='header'>
      <div className='left-header'>
        <Link to='/'>
          <img alt='logo' src={logo}/>
        </Link>
        <div className='fild-guide'>
          <ul className='guide'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/portifoliologo'>Portfólio</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
          </ul>
        </div>
      </div>
      <div className='right-header'>
        <a href='https://www.instagram.com/giga.arts/' 
           target='_blanck'>
          <AiOutlineInstagram className='instagram-icon'/></a>
        <a href='https://www.youtube.com/channel/UCvzLcjowZKo1olo3MluUm3w' 
           target='_blanck'>
          <AiFillYoutube className='youtube-icon'/></a>
      </div>
    </div>
  )
}