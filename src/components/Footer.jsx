import React from 'react';
import "../estilos/Footer.css";
import LogoFooter from "../assets/LogoFooter.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";
import LinkedIn from "../assets/LinkedIn.png";
function Footer() {
return (
    <div className='footer'>
        <div className='columns-footer'>
            <div className='column-footer'>
                <div className='logo-wrapper-footer'>
                    <img src={LogoFooter}/>
                </div>
            </div>
            <div className='small-columns-footer'>
                <div className='content-footer'>
                    <div className='footer-links'>
                        <span>Projects</span>
                        <span>Portraits</span>
                        <span>Fashion</span>
                        <span>Fine Art</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-footer'>
            <div className='copyright'>
                <span>© 2023 Capture Studio. All rights reserved.</span>
                <div className='column-footer-icons'>
                    <div className='content-icons'>
                        <div className='social-links'>
                            <img src={Facebook} />
                            <img src={Instagram} />
                            <img src={Twitter} />
                            <img src={LinkedIn} />
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>  
)
}

export default Footer;