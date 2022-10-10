import React from 'react';
import CardePerso from '../assets/imgs/cardePerso.png';

function RosterPageAdmin() {
    return (
      <div className='flex justify-center items-center mt-10 text-white font-bold'>
        <div className='flex flex-col bg-container rounded-xl p-8 mx-10'>
          <div className='flex justify-between items-center'>
            <h2 className='text-5xl mb-10'>Roster Open Mid</h2>
            <form className='flex justify-end text-black'>
              <input className='rounded-xl mr-5 p-3' type="text" placeholder='Nom'></input>
              <input className='rounded-xl mr-5 p-3' type="text" placeholder='Serveur'></input>
              <select className='rounded-xl px-3 mr-5'>
                <option>TANK</option>
                <option>HEAL</option>
                <option>DPS</option>
              </select>
              <button className='bg-button rounded-xl py-3 px-5 mr-3 hover:bg-buttonHover text-white'>Ajouter</button>
            </form>
          </div>
          <div className='flex items-center pb-10 ml-10'>
            <p className='text-2xl'>TANK -</p>
            <div className='flex flex-wrap'>
              <img className='pl-5' src={CardePerso} alt='Cadre de personnage'></img>
              <img className='pl-5' src={CardePerso} alt='Cadre de personnage'></img>
            </div>
          </div>
          <div className='flex items-center pb-10 ml-10'>
            <p className='text-2xl'>HEAL -</p>
            <div className='flex flex-wrap'>
              <img className='pl-5' src={CardePerso} alt='Cadre de personnage'></img>
              <img className='pl-5' src={CardePerso} alt='Cadre de personnage'></img>
              <img className='pl-5' src={CardePerso} alt='Cadre de personnage'></img>
              <img className='pl-5' src={CardePerso} alt='Cadre de personnage'></img>
              <img className='pl-5' src={CardePerso} alt='Cadre de personnage'></img>
            </div>
          </div>
          <div className='flex pb-10 ml-10'>
            <p className='text-2xl mr-8 mt-10'>DPS -</p>
            <div className='flex flex-wrap gap-5 w-5/6'>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
              <img src={CardePerso} alt='Cadre de personnage'></img>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default RosterPageAdmin