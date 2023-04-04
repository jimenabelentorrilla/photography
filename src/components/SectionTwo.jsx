import React from 'react';

function SectionTwo({ image, year, name }) {
  return (
    <div className='column'>
      <div className='image-column'>
        <div className='image-wrapper-two'> 
          <img className='image-one' src={image} />
        </div>
        <div className='image-text'>
          <p className='year'>{year}</p>
          <p className='name'>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo;


