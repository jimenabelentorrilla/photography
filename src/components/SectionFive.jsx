import React from 'react';
import ImgSectionFive from "../assets/section5.png";

function SectionFive() {
return (
    <div className='section-bg'>
        <div className='container-five'>
            <div className='column-five'>
                <div className='content-five'>
                    <div className='section-title-five'>
                        <span>September 2021</span>
                        <div className='content-text-five'>
                            <h3>Priya Patel</h3>
                            <p>Et malesuada fames ac turpis egestas maecenas pharetra convallis. Aenean vel elit scelerisque mauris. Gravida neque convallis a cras semper auctor neque vitae. Habitasse platea dictumst quisque sagittis. Gravida neque convallis a cras semper.</p>
                            <div className='actions-five'>
                                <button>View case study</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-wrapper-five'>
                <img src={ImgSectionFive}/>
            </div>
        </div>
    </div>
)
}

export default SectionFive;