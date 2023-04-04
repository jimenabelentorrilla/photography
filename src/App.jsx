import './App.css';
import IntroSection from './components/IntroSection';
import SectionTwo from './components/SectionTwo';
import ImageOne from "./assets/Image-one.jpg";
import ImageTwo from "./assets/Image-two.jpg";
import ImageThree from "./assets/Image-three.jpg";


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
      <div className='section-bg'>
        <div className='container-three'>
          <div className='column-three'>
            <div className='content-three'>
              <div className='section-title-three'>
                <span>March 2022</span>
                <div className='content-text-thr'>
                  <h3>Gabriela Silva</h3>
                  <p>Cras semper auctor neque vitae tempus. Neque volutpat ac tincidunt vitae. Eros donec ac odio tempor orci dapibus ultrices. Eget mauris pharetra et ultrices neque ornare. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Nunc id cursus metus aliquam eleifend mi.</p>
                  <div className='actions-three'>
                    <button>View case study</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default App;
