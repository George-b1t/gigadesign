import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CamisaPageContainer from './ImagePage/CamisaPageContainer.jsx';

import camisa1 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_1.jpg';
import camisa2 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_2.jpg';
import camisa3 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_3.jpg';
import camisa4 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_4.jpg';
import camisa5 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_5.jpg';
import camisa6 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_6.jpg';
import camisa7 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_7.jpg';
import camisa8 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_8.jpg';
import camisa9 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_9.jpg';
import camisa10 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_10.jpg';
import camisa11 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_11.jpg';
import camisa12 from '../../assets/ImagesPortifolio/camisas/portifolio_camisa_12.jpg';

export default function PortifolioCamisaContainer() {
  const [ MainContent, setMainContent ] = useState();
  const [ content2, setContent2] = useState();

  function toImage(currentImage) {
    setMainContent();
    setContent2(<CamisaPageContainer image={currentImage}/>);
  };

  useEffect(() => {
    setMainContent(
      <div id='all-portifolio-container' className='portifolio-container'>
        <div className='field-portifolio-card'>
          <h1 className='title-portifolio'>Portfólio</h1>
          <div className='field-portifolio-select'>
            <Link to='/portifoliologo' className='portifoliocamisa-button-logo'>
              Logos
            </Link>
            <Link to='/portifoliocamisa' className='portifoliocamisa-button-camisa'>
              Camisas
            </Link>
          </div>
        </div>
        <div className='field-images'>
          <ul className='field-images-content'>
            <Link onClick={() => {toImage(camisa1)}} to='/portifoliocamisa'>
              <img src={camisa1} alt='portifoliocamisa1'/>
            </Link>
            <Link onClick={() => {toImage(camisa2)}} to='/portifoliocamisa'>
              <img src={camisa2} alt='portifoliocamisa2'/>
            </Link>
            <Link onClick={() => {toImage(camisa3)}} to='/portifoliocamisa'>
              <img src={camisa3} alt='portifoliocamisa3'/>
            </Link>
            <Link onClick={() => {toImage(camisa4)}} to='/portifoliocamisa'>
              <img src={camisa4} alt='portifoliocamisa4'/>
            </Link>
            <Link onClick={() => {toImage(camisa5)}} to='/portifoliocamisa'>
              <img src={camisa5} alt='portifoliocamisa5'/>
            </Link>
            <Link onClick={() => {toImage(camisa6)}} to='/portifoliocamisa'>
              <img src={camisa6} alt='portifoliocamisa6'/>
            </Link>
            <Link onClick={() => {toImage(camisa7)}} to='/portifoliocamisa'>
              <img src={camisa7} alt='portifoliocamisa7'/>
            </Link>
            <Link onClick={() => {toImage(camisa8)}} to='/portifoliocamisa'>
              <img src={camisa8} alt='portifoliocamisa8'/>
            </Link>
            <Link onClick={() => {toImage(camisa9)}} to='/portifoliocamisa'>
              <img src={camisa9} alt='portifoliocamisa9'/>
            </Link>
            <Link onClick={() => {toImage(camisa10)}} to='/portifoliocamisa'>
              <img src={camisa10} alt='portifoliocamisa10'/>
            </Link>
            <Link onClick={() => {toImage(camisa11)}} to='/portifoliocamisa'>
              <img src={camisa11} alt='portifoliocamisa11'/>
            </Link>
            <Link onClick={() => {toImage(camisa12)}} to='/portifoliocamisa'>
              <img src={camisa12} alt='portifoliocamisa12'/>
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