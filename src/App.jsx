import './App.css';
import IntroSection from './components/IntroSection';
import SectionTwo from './components/SectionTwo';
import ImageOne from "./assets/Image-one.jpg";
import ImageTwo from "./assets/Image-two.jpg";
import ImageThree from "./assets/Image-three.jpg";
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <div className='section-two'>
        <div className='container gap-two'>
          <h3 className='our-work'>Our work</h3>
          <div className='columns'>
            <SectionTwo 
              image={ImageOne}
              year="2018"
              name="Aisha Patel" />
            <SectionTwo 
              image={ImageTwo}
              year="2021"
              name="Isabella Costa" />
            <SectionTwo 
              image={ImageThree}
              year="2022"
              name="Fatima Hassan" />
          </div>
          <div className='button-wrapper'>
            <button>
            View all work
            </button>
          </div>
        </div>
      </div>
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  )
};

export default App;
