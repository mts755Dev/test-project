import Bugs from '../components/Bugs/Bugs';
import BugShow from '../components/Bugs/BugShow';
import {Route,Routes,} from 'react-router-dom';
import Projects from '../components/Projects/Projects';

  const routes =
  <Routes>
      <Route path="/"  element={<Projects />}/>
      <Route  path="/:id/bugs" element={<Bugs />}/>
      <Route  path="/:id/bugs/:bugId" element={<BugShow />} />
  </Routes>

export default routes;
