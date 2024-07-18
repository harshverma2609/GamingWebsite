import Heading from './components/Heading';
import Heading2 from './components/Heading2';
import EndOfpage from './components/EndOfPage';
import MidPage from './components/MidPage';
import './CasinoPage.css';

function CasinoPage() {
  return (
    <div className="gamePage">
      <Heading/>
      <Heading2/>
      <MidPage/>
      <EndOfpage/>
    </div>
  );
}

export default CasinoPage;
