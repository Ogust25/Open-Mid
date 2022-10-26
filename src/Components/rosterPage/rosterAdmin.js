import React, { useState } from 'react';
import FormAddRoster from './formAddRoster';
import TankContainer from './TankContainer';
import HealContainer from './HealContainer';
import DpsContainer from './DpsContainer';

function RosterPageAdmin() {
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

  const addPlayer = (player) => {
    let renderURL = `/profile/wow/character/${player.server.toLowerCase()}/${player.name.toLowerCase()}/character-media`;
    let namespace = "?namespace=profile-eu&locale=fr_FR";
    let token = "&access_token=EUx03WVdY3aDlN2MzIb8BrIxFWdfT0LEnS";
    const url = `https://eu.api.blizzard.com${renderURL}${namespace}${token}`;

    fetch(url).then((response) =>
      response.json().then((data) => {
        const role = player.role;
        const name = data.character.name;
        const portait = data.assets[0].value;
        const imgPerso = data.assets[3].value;
        
        const id = Math.floor(Math.random() * 10000) + 1;
        const newPlayer = { id: id, name: name, src: portait, role: role };
        setPlayers([...players, newPlayer])
        console.log(imgPerso);
      })
    )
  }

  return (
    <div className='flex justify-center items-center mt-10 text-white font-bold'>
      <div className='flex flex-col bg-container w-5/6 rounded-xl p-8'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-5xl'>Roster Open Mid</h2>
          <FormAddRoster onAdd={addPlayer} />
        </div>
        <TankContainer players={players} />
        <HealContainer players={players} />
        <DpsContainer players={players} />
      </div>
    </div>
  )
}

export default RosterPageAdmin