import { Route, Routes } from "react-router-dom";
import Nav from './Components/nav.js';
// import NavLogged from './Components/navLogged';
import Home from './Components/home.js';
import RosterPage from './Components/roster';
// import RosterPageAdmin from './Components/rosterAdmin';

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className='h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roster' element={<RosterPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
