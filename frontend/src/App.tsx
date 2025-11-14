import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import './App.css'
import Navbar from './components/Navbar'
import UploadBar from './components/Analysis'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<UploadBar />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
