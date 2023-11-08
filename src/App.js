import logo from './larping.jpg';
import './App.css';
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Layout>
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
    </Layout>
  )
}

export default App;
