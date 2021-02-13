import React from 'react';
import { Link } from 'react-router-dom';

import LogoText from '../../assets/logo-text.png';

export default function HomeContainer() {
  return (
    <div className='home-container'>
      <div className='field-home-content'>
        <div className='field-home-image'>
          <div className='field-central-home-image'>
            <img src={LogoText} alt="centralLogo"/>
          </div>
        </div>
        <div className='field-home-buttons'>
          <Link to='/portifoliologo' 
           className='button-portifolio'>
            Conheça o meu trabalho
          </Link>
          <a href='https://www.instagram.com/giga.arts' 
             target='_blanck'
             className='button-instagram'>
            Visitar instagram
          </a>
        </div>
      </div>
    </div>
  );
};