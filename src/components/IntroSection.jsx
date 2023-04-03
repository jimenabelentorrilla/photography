import React from 'react';
import Logo from "../assets/Logo.png";
import Round from "../assets/Round Button.png";
import Image from "../assets/Image.png";

function IntroSection() {

  return (
    <div className='intro-section'>
        <div className='navbar-logo-left'>
          <div className='navbar-container'>
            <div className='navbar-content'>
              <div className='navbar-brand'> 
                <div className='navbar-logo'>
                  <img src={Logo}/>
                </div>
              </div>
              <div className='navbar-menu'>
                <div className='navbar-link'>
                  <span>Projects</span>
                </div>
                <div className='navbar-link'>
                  <span>Portrait</span>
                </div>
                <div className='navbar-link'>
                  <span>Fashion</span>
                </div>
                <div className='navbar-link'>
                  <span>Fine Art</span>
                </div>
                <button className='navbar-button'>Contact</button>
              </div>
            </div>
          </div>
        </div>
        <div className='hero'>
          <div className='container'>
            <div className='two-columns'> 
              <div className='column-one'>
                <div className='hero-title'>
                  <h1>We Capture the World</h1>
                  <div className='text-wrapper'>
                    <p>At our studio, we don't just take pictures - we capture the world. Our passion for photography goes beyond just snapping a photo - we strive to create images that tell a story, evoke emotions, and capture the essence of the world around us.</p>
                  </div>
                  <div className='round-button'>
                    <img src={Round}/>
                  </div>
                
                </div>
              </div>
              <div className='column-two'>
                <div className='image-wrapper'>
                  <img src={Image}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default IntroSection;