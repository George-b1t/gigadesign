import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div className='portifolio-container'>
      <div className='field-portifolio-card'>
        <h1 className='title-portifolio'>Portifólio</h1>
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
          <Link to='/portifoliocamisa/camisa1'>
            <img src={camisa1} alt='portifoliocamisa1'/>
          </Link>
          <Link to='/portifoliocamisa/camisa2'>
            <img src={camisa2} alt='portifoliocamisa2'/>
          </Link>
          <Link to='/portifoliocamisa/camisa3'>
            <img src={camisa3} alt='portifoliocamisa3'/>
          </Link>
          <Link to='/portifoliocamisa/camisa4'>
            <img src={camisa4} alt='portifoliocamisa4'/>
          </Link>
          <Link to='/portifoliocamisa/camisa5'>
            <img src={camisa5} alt='portifoliocamisa5'/>
          </Link>
          <Link to='/portifoliocamisa/camisa6'>
            <img src={camisa6} alt='portifoliocamisa6'/>
          </Link>
          <Link to='/portifoliocamisa/camisa7'>
            <img src={camisa7} alt='portifoliocamisa7'/>
          </Link>
          <Link to='/portifoliocamisa/camisa8'>
            <img src={camisa8} alt='portifoliocamisa8'/>
          </Link>
          <Link to='/portifoliocamisa/camisa9'>
            <img src={camisa9} alt='portifoliocamisa9'/>
          </Link>
          <Link to='/portifoliocamisa/camisa10'>
            <img src={camisa10} alt='portifoliocamisa10'/>
          </Link>
          <Link to='/portifoliocamisa/camisa11'>
            <img src={camisa11} alt='portifoliocamisa11'/>
          </Link>
          <Link to='/portifoliocamisa/camisa12'>
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
};