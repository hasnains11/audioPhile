import HeroSection from './components/HeroSection';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
function App() {
  const colors={orange:'#d87c49'}
  return (
    <div className="App">
      <div style={{background:'black'}}>
        <Navbar/>
      </div>
      
      <Home></Home>
    </div>
  );
}

export default App;
