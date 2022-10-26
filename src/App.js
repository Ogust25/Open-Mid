import { Route, Routes } from "react-router-dom";
import Nav from './Components/nav.js';
// import NavLogged from './Components/navLogged';
import Home from './Components/home.js';
// import RosterPage from './Components/rosterPage/roster';
import RosterPageAdmin from './Components/rosterPage/rosterAdmin';
import ProfilePage from "./Components/rosterPage/profilePage.js";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className='h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roster' element={<RosterPageAdmin />} />
          <Route path='/roster/profile' element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
