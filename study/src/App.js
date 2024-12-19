import logo from './logo.svg';
import './App.css';
import Composition from './components/2-4. props/Composition';
import Extraction from './components/2-4. props/Extraction/Extraction';
import ClassComponent from './components/2-5. State/ClassComponent';
import FunctionalComponent from './components/2-5. State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionalComponent />
      {/* <Extraction /> */}
      <Composition />
    </div>
  );
}

export default App;
