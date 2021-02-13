import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import logo1 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_1.jpg';
import logo2 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_2.jpg';
import logo3 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_3.jpg';
import logo4 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_4.jpg';
import logo5 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_5.jpg';
import logo6 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_6.jpg';
import logo7 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_7.jpg';
import logo8 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_8.jpg';
import logo9 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_9.jpg';
import logo10 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_10.jpg';
import logo11 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_11.jpg';
import logo12 from '../../../assets/ImagesPortifolio/logos/portifolio_logo_12.jpg';

export default function LogoPageContainer() {
  const logoParam = useParams().logo;
  const [ logo, setLogo] = useState();  

  useEffect(() => {
    for(let i = 0; i <= 12; i++) {
      if(logoParam === `logo${i}`) {
        if (i === 1) {
          setLogo(logo1);
        } else {
          if (i === 2) {
            setLogo(logo2);
          } else {
            if (i === 3) {
              setLogo(logo3);
            } else {
              if (i === 4) {
                setLogo(logo4);
              } else {
                if (i === 5) {
                  setLogo(logo5);
                } else {
                  if (i === 6) {
                    setLogo(logo6);
                  } else {
                    if (i === 7) {
                      setLogo(logo7);
                    } else {
                      if (i === 8) {
                        setLogo(logo8);
                      } else {
                        if (i === 9) {
                          setLogo(logo9);
                        } else {
                          if (i === 10) {
                            setLogo(logo10);
                          } else {
                            if (i === 11) {
                              setLogo(logo11);
                            } else {
                              if (i === 12) {
                                setLogo(logo12);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } 
          }
        }
      };
    };
  },[logoParam]);
  
  return (
    <div className='logo-page-container'>
      <div className='logo-page-field-content'>
        <div className='logo-page-field-image'>
          <img src={logo} alt='teste'/>
        </div>
        <div className='logo-page-field-buttons'>
          <Link to='/portifoliologo' className='logo-page-button-back'>
            Voltar
          </Link>
          <a href='https://www.instagram.com/giga.arts/' className='logo-page-button-instagram'>
            Visitar Instagram
          </a>
        </div>
      </div>
    </div>
  );
};