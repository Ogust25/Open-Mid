import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Nav from './Components/nav.js';
// import NavLogged from './Components/navLogged';
import Home from './Components/home.js';
// import RosterPage from './Components/rosterPage/roster';
import RosterPageAdmin from './Components/rosterPage/rosterAdmin';
import ProfilePage from "./Components/rosterPage/profilePage.js";

function App() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Steakozor",
      src: "https://render.worldofwarcraft.com/eu/character/elune/19/193631763-avatar.jpg",
      role: "dps",
      imgPerso: "https://render.worldofwarcraft.com/eu/character/elune/19/193631763-main-raw.png",
      server: 'Elune',
    },
    {
      id: 2,
      name: "Mury",
      src: "https://render.worldofwarcraft.com/eu/character/elune/150/155300246-avatar.jpg",
      role: "heal",
      imgPerso: "https://render.worldofwarcraft.com/eu/character/elune/150/155300246-main-raw.png",
      server: 'Elune',
    },
    {
      id: 3,
      name: "Mnk",
      src: "https://render.worldofwarcraft.com/eu/character/elune/70/199881286-avatar.jpg",
      role: "tank",
      imgPerso: "https://render.worldofwarcraft.com/eu/character/elune/70/199881286-main-raw.png",
      server: 'Elune',
    }
  ])


  return (
    <>
      <header>
        <Nav />
      </header>
      <main className='h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roster' element={<RosterPageAdmin players={players} setPlayers={setPlayers} />} />
          <Route path='/roster/profile/:id' element={<ProfilePage players={players} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
