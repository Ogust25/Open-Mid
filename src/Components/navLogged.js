import React from 'react';
import omBanner from '../assets/imgs/om-banner.png';

function NavLogged() {
    return (
      <nav className='flex flex-col items-center'>
        <div className='bg-container w-11/12 rounded-3xl flex items-center p-3 mt-3 justify-between text-white text-xl drop-shadow-xl'>
          <a href='./'><img className='h-14' src={omBanner} alt='Nom et banière de la guilde'></img></a>
          <ul className='flex justify-evenly w-2/3'>
            <li className='hover:text-blue-200 cursor-pointer'>Roster</li>
            <li><a className='hover:text-blue-200' target='blank_' href='https://www.warcraftlogs.com/guild/id/304005'>Warcraft Logs</a></li>
            <li><a className='hover:text-blue-200' target='blank_' href='https://raider.io/guilds/eu/varimathras/Open%20Mid'>Raider.io</a></li>
            <li><a className='hover:text-blue-200' target='blank_' href='https://www.wowprogress.com/guild/eu/varimathras/Open+Mid'>WoW-Progress</a></li>
          </ul>
          <button className='bg-button rounded-xl py-3 px-5 mr-3 hover:bg-buttonHover' id='loginButton'>Login</button>
        </div>
        <div className='bg-container w-5/6 rounded-bl-3xl rounded-br-3xl flex items-center p-4 justify-between text-white text-xl'>
          <ul className='flex justify-evenly w-full'>
            <li className='hover:text-blue-200 cursor-pointer'>GDOC</li>
            <li className='hover:text-blue-200 cursor-pointer'>GDOC - Roster</li>
            <li className='hover:text-blue-200 cursor-pointer'>WeakAura</li>
            <li className='hover:text-blue-200 cursor-pointer'>WoWAnalyzer (LocalServer)</li>
            <li><a className='hover:text-blue-200 cursor-pointer' href='https://bloodmallet.com/'>BloodMallet</a></li>
          </ul>
        </div>
      </nav>
    )
  }

export default NavLogged