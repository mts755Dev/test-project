import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Head from './components/Head/Head';
import Bugs from './components/Bugs/Bugs';
import BugShow from './components/Bugs/BugShow';

function App() {
  return (
      <div className="App">
        <nav>
          <Link className='text-decoration-none' to="/" ><Head /></Link>
        </nav>
        <Routes>
          <Route path="/"  element={<Projects />}/>
          <Route  path="/:id/bugs" element={<Bugs />}/>
          <Route  path="/:id/bugs/:bugId" element={<BugShow />} />
        </Routes>
      </div>
  );
}

export default App;
