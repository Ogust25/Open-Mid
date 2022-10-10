import React from 'react';
import bark from '../assets/imgs/bark.png';

function HomePage() {
    return (
      <div className='relative w-full h-full'>
        <div className='flex justify-center'>
          <div className='text-white drop-shadow-2xl mt-16'>
            <p className='text-5xl'>OPEN MID - 10.0 - DF</p>
            <p className='text-7xl'>RECRUTEMENT OUVERT</p>
          </div>
        </div>
        <div className='absolute top-60 left-10'>
          <div className='text-white drop-shadow-2xl mt-10'>
            <p className='text-5xl'>GUILDE <span className='text-purple-600'>MYTHIC</span> DEPUIS 2018</p>
            <p className='text-4xl'><span className='text-purple-600'>6/10 MM</span> CN <span className='text-2xl'>(2 MOIS DE PROGRESS)</span></p>
            <p className='text-4xl'><span className='text-purple-600'>6/12 MM</span> NYA</p>
          </div>
        </div>
        <img className='absolute bottom-0 -right-24' src={bark} alt='On agite la gamelle pour les loots !'></img>
      </div>
    )
  }

export default HomePage