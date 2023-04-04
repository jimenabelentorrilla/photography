import React from 'react';
import "../estilos/SectionSix.css";
import ImgSectionSix from "../assets/section6.png";
import Actions from '../components/Actions';

function SectionSix() {
return (
    <div className='section-bg-six'>
        <div className='container-six'>
            <div className='text-six'>
                <span>November 2022</span>
                <h3>Victorian Collection</h3>
            </div>
            <img src={ImgSectionSix} />
            <Actions />
        </div>
    </div>
)
}

export default SectionSix;