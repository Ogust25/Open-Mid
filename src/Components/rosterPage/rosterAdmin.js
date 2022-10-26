import FormAddRoster from './formAddRoster';
import TankContainer from './TankContainer';
import HealContainer from './HealContainer';
import DpsContainer from './DpsContainer';

function RosterPageAdmin({ players, setPlayers }) {

  const addPlayer = (player) => {
    let renderURL = `/profile/wow/character/${player.server.toLowerCase()}/${player.name.toLowerCase()}/character-media`;
    let namespace = "?namespace=profile-eu&locale=fr_FR";
    let token = "&access_token=EUTNebPGjHgdieK2pCg3Y8ZLtIGVO4wJ3I";
    const url = `https://eu.api.blizzard.com${renderURL}${namespace}${token}`;

    fetch(url).then((response) =>
      response.json().then((data) => {
        const role = player.role;
        const name = data.character.name;
        const portait = data.assets[0].value;
        const imgPerso = data.assets[3].value;
        const server = data.character.realm.name;
        
        const id = Math.floor(Math.random() * 10000) + 1;
        const newPlayer = { id: id, name: name, src: portait, role: role, imgPerso: imgPerso, server: server};
        setPlayers([...players, newPlayer])
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