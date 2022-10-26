import React, { useState } from 'react';
import TankContainer from './TankContainer';
import HealContainer from './HealContainer';
import DpsContainer from './DpsContainer';

function RosterPage() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Steakozor",
      src: "https://render.worldofwarcraft.com/eu/character/elune/19/193631763-avatar.jpg",
      role: "dps",
    },
    {
      id: 2,
      name: "Mury",
      src: "https://render.worldofwarcraft.com/eu/character/elune/150/155300246-avatar.jpg",
      role: "heal",
    },
    {
      id: 3,
      name: "Mnk",
      src: "https://render.worldofwarcraft.com/eu/character/elune/70/199881286-avatar.jpg",
      role: "tank",
    }
  ])

    return (
      <div className='flex justify-center items-center mt-10 text-white font-bold'>
      <div className='flex flex-col bg-container w-5/6 rounded-xl p-8'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-5xl'>Roster Open Mid</h2>
        </div>
        <TankContainer players={players} />
        <HealContainer players={players} />
        <DpsContainer players={players} />
      </div>
    </div>
    )
  }

export default RosterPage