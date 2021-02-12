import React from 'react';

import backgroundImage from '../../assets/background-image.png'

export default function BackGorund() {
  return (
    <div className='field-image-background'>
      <img src={backgroundImage} alt="backgroundImage"/>
      <div className='background-opacity'/>
    </div>
  )
}