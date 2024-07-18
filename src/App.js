
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Games from './components/Games';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App(){
  return (
    <div className='socialGame'>
      <Header/>
      <Home />
      <AboutUs />
      <Games />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
