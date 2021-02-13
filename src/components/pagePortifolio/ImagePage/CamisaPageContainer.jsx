import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import camisa1 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_1.jpg';
import camisa2 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_2.jpg';
import camisa3 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_3.jpg';
import camisa4 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_4.jpg';
import camisa5 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_5.jpg';
import camisa6 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_6.jpg';
import camisa7 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_7.jpg';
import camisa8 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_8.jpg';
import camisa9 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_9.jpg';
import camisa10 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_10.jpg';
import camisa11 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_11.jpg';
import camisa12 from '../../../assets/ImagesPortifolio/camisas/camisas_2/portifolio_camisa2_12.jpg';

export default function CamisaPageContainer() {
  const camisaParam = useParams().camisa;
  const [ camisa, setCamisa] = useState();  

  useEffect(() => {
    for(let i = 0; i <= 12; i++) {
      if(camisaParam === `camisa${i}`) {
        if (i === 1) {
          setCamisa(camisa1);
        } else {
          if (i === 2) {
            setCamisa(camisa2);
          } else {
            if (i === 3) {
              setCamisa(camisa3);
            } else {
              if (i === 4) {
                setCamisa(camisa4);
              } else {
                if (i === 5) {
                  setCamisa(camisa5);
                } else {
                  if (i === 6) {
                    setCamisa(camisa6);
                  } else {
                    if (i === 7) {
                      setCamisa(camisa7);
                    } else {
                      if (i === 8) {
                        setCamisa(camisa8);
                      } else {
                        if (i === 9) {
                          setCamisa(camisa9);
                        } else {
                          if (i === 10) {
                            setCamisa(camisa10);
                          } else {
                            if (i === 11) {
                              setCamisa(camisa11);
                            } else {
                              if (i === 12) {
                                setCamisa(camisa12);
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
  },[camisaParam]);
  
  return (
    <div className='logo-page-container'>
      <div className='logo-page-field-content'>
        <div className='logo-page-field-image'>
          <img src={camisa} alt='teste'/>
        </div>
        <div className='logo-page-field-buttons'>
          <Link to='/portifoliocamisa' className='logo-page-button-back'>
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