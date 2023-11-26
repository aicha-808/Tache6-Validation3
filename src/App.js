import { NavBar } from './Composants/NavBar';
import { Accueil } from './Composants/Accueil';
import { Presentation } from './Composants/Presentation';
import { Portfolio } from './Composants/Portfolio';
import { Competence } from "./Composants/Competence";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Experience } from './Composants/Experience';
import { Contact } from './Composants/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Accueil />
      <Presentation />
      <Portfolio />
      <Competence />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
