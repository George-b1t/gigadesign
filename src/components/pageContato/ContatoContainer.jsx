import React from 'react';

import arrowDown from '../../assets/arrow-down.png';
import whats from '../../assets/whats.png';
import phone from '../../assets/phone-icon.png';
import mail from '../../assets/card-icon.png';
import insta from '../../assets/insta-icon.png';

export default function ContatoContainer() {
  return (
    <div className='contato-container'>
      <div className='contato-container-2'>
        <div className='contato-contact-information'>
          <div>
          <h1 className='contato-title-information'>Contact Information</h1>
          <div className='contato-field-content'>
            <img src={phone} alt='phone'/>
            <div className='contato-content-information'>
              <h1>Telefone</h1>
              <p>+55 79 98846-0356</p>
            </div>
          </div>
          <div className='contato-field-content'>
            <img src={mail} alt='card'/>
            <div className='contato-content-information'>
              <h1>Email</h1>
              <p>giga.contato123@gmail.com</p>
            </div>
          </div>
          <div className='contato-field-content'>
            <img src={insta} alt='insta'/>
            <div className='contato-content-information'>
              <h1>Instagram</h1>
              <p>giga.arts</p>
            </div>
          </div>
          </div>
          <h1 className='contato-beta-version'>Beta Version</h1>
        </div>

        <div className='contato-schedule-project'>
          <div className='contato-schedule-project-2'>
            <div className='contato-schedule-1'>
              <p>
                Entre em contato conosco pelo 
                WhatsApp e agende o seu projeto!
              </p>
            </div>
            <div className='contato-schedule-2'>
              <p>
                Clique no botão abaixo e 
                nos envie uma mensagem!
              </p>
            </div>
            <div className='contato-field-arrow'>
              <img src={arrowDown} alt="arrow-down"/>
            </div>
            <div className='contato-field-whats'>
              <a className='contato-button-whats' href='https://wa.me/message/3TVCD23K5XTNB1'>
                <div className='contato-field-image-whats'>
                  <img src={whats} alt='whatsapp'/>
                </div>
                <p>
                  WhatsApp
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}