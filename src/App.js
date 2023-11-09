import './App.css';
import Layout from './components/Layout/Layout';
import { Routes, Route }from 'react-router-dom';
import Sample from "./pages/sample";
import Home from "./pages/home";
import NoMatch from "./pages/PageNotExist"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/sample" element={<Sample />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Layout>
  );
}

export default App