import HeroSection from './components/HeroSection';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/pages/Home';
import Footer from './components/footer';
import SpeakersPage from './components/pages/SpeakersPage';
import EarphonesPage from './components/pages/EarphonesPage';
import HeadphonePage from './components/pages/HeadphonePage';
import {Routes,Route} from 'react-router-dom';
function App() {
  const colors={orange:'#d87c49'}
  return (
    <div className="app" >
      
      <div style={{background:'black'}}>
        <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="headphones" element={<HeadphonePage/>}></Route>
          <Route path="speakers" element={<SpeakersPage/>}></Route>
          <Route path="earphones" element={<EarphonesPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
