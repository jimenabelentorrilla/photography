import React from 'react';
import ImgSectionFour from "../assets/section4.png";
function SectionFour() {
return (
    <div className='section-bg'>
        <div className='container-four'>
            <div className='image-wrapper-four'>
                <img src={ImgSectionFour}/>
            </div>
            
            <div className='content-four'>
                <div className='section-title-four'>
                    <span>Janurary 2010</span>
                    <div className='content-text-four'>
                        <h3>Amara Lopez</h3>
                        <p>Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Quam elementum pulvinar etiam non quam lacus suspendisse. Nunc sed velit dignissim sodales ut eu sem. Pretium quam vulputate dignissim suspendisse in est ante in nibh.</p>
                        <div className='actions-four'>
                            <button>View case study</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default SectionFour;
