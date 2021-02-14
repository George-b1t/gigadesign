import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogoPageContainer from 
  './ImagePage/LogoPageContainer.jsx';

import logo1 from '../../assets/ImagesPortifolio/logos/portifolio_logo_1.jpg';
import logo2 from '../../assets/ImagesPortifolio/logos/portifolio_logo_2.jpg';
import logo3 from '../../assets/ImagesPortifolio/logos/portifolio_logo_3.jpg';
import logo4 from '../../assets/ImagesPortifolio/logos/portifolio_logo_4.jpg';
import logo5 from '../../assets/ImagesPortifolio/logos/portifolio_logo_5.jpg';
import logo6 from '../../assets/ImagesPortifolio/logos/portifolio_logo_6.jpg';
import logo7 from '../../assets/ImagesPortifolio/logos/portifolio_logo_7.jpg';
import logo8 from '../../assets/ImagesPortifolio/logos/portifolio_logo_8.jpg';
import logo9 from '../../assets/ImagesPortifolio/logos/portifolio_logo_9.jpg';
import logo10 from '../../assets/ImagesPortifolio/logos/portifolio_logo_10.jpg';
import logo11 from '../../assets/ImagesPortifolio/logos/portifolio_logo_11.jpg';
import logo12 from '../../assets/ImagesPortifolio/logos/portifolio_logo_12.jpg';

export default function PortifolioLogoContainer() {
  const [ MainContent, setMainContent ] = useState();
  const [ content2, setContent2] = useState();

  function toImage(currentImage) {
    setMainContent(<></>);
    setContent2(<LogoPageContainer image={currentImage}/>);
  }

  useEffect(() => {
    setMainContent(
      <div id='all-portifolio-container' className='portifolio-container'>
        <div className='field-portifolio-card'>
          <h1 className='title-portifolio'>Portfólio</h1>
          <div className='field-portifolio-select'>
            <Link to='/portifoliologo' className='portifoliologo-button-logo'>
              Logos
            </Link>
            <Link to='/portifoliocamisa' className='portifoliologo-button-camisa'>
              Camisas
            </Link>
          </div>
        </div>
        <div className='field-images'>
          <ul className='field-images-content'>
            <Link to='/portifoliologo' onClick={() => {toImage(logo1)}}>
              <img src={logo1} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo2)}}>
              <img src={logo2} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo3)}}>
              <img src={logo3} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo4)}}>
              <img src={logo4} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo5)}}>
              <img src={logo5} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo6)}}>
              <img src={logo6} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo7)}}>
              <img src={logo7} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo8)}} >
              <img src={logo8} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo9)}}>
              <img src={logo9} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo10)}}>
              <img src={logo10} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo11)}}>
              <img src={logo11} alt='portifoliologo1'/>
            </Link>
            <Link to='/portifoliologo' onClick={() => {toImage(logo12)}}>
              <img src={logo12} alt='portifoliologo1'/>
            </Link>
          </ul>
        </div>
        <div className='field-see-more-portifolio'>
          <a target='_blacnk' href='https://www.instagram.com/giga.arts/'>
            Ver no instagram
          </a>
        </div>
      </div>
    );
    setContent2();
  }, []);
  
  return (
    <>
      {MainContent}
      {content2}
    </>
  );
};