import React from 'react';
import ImgSectionThree from "../assets/section3.png";
import "../estilos/SectionThree.css";

function SectionThree() {
return (
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
            <div className='image-wrapper-three'>
                <img src={ImgSectionThree}/>
            </div>
        </div>
    </div>
)
}

export default SectionThree;
