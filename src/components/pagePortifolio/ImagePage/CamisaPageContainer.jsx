import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PortifolioCamisaContainer from '../PortifolioCamisaContainer';

export default function CamisaPageContainer({ image }) {
  const [ MainContent, setMainContent ] = useState();
  const [ content1, setContent1 ] = useState();

  useEffect(() => {
    setMainContent( 
      <div id='all-logo-page-container' className='logo-page-container'>
        <div className='logo-page-field-content'>
          <div className='logo-page-field-image'>
            <img src={image} alt='teste'/>
          </div>
          <div className='logo-page-field-buttons'>
            <Link to='/portifoliocamisa' onClick={backToPort} className='logo-page-button-back'>
              Voltar
            </Link>
            <a href='https://www.instagram.com/giga.arts/' className='logo-page-button-instagram'>
              Visitar Instagram
            </a>
          </div>
        </div>
      </div>
    );
  }, [image]);
  

  function backToPort() {
    setMainContent();
    setContent1(<PortifolioCamisaContainer/>);
  };

  return (
    <>
      {MainContent}
      {content1}
    </>
  );
};