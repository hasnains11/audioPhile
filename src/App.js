import HeroSection from './components/HeroSection';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Footer from './components/footer';
function App() {
  const colors={orange:'#d87c49'}
  return (
    <div className="App">
      <div style={{background:'black'}}>
        <Navbar/>
      </div>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
