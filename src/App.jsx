import './App.css';
import Head from './components/Shared/Head';
import routes from './Routes/Routes';
const App = () => {
  return (
      <div className="App">
        <Head />
        {routes}
      </div>
  );
}

export default App;
