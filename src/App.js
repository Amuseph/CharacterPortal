import logo from './larping.jpg';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Project KLARP
        </p>
        <p>
          Gather your friends! Its KLARPING time
        </p>
        <p>
          PS: No Bully
        </p>
      </header>
    </div>
  );
}

export default App;
