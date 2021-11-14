import React from 'react'

import './serial-number-dog.style.scss'
import '../../sass/typography.scss'

const SerialNumberDog = ({image, serialNumber, width}) => (
    <div className={width ? "serial-number-dog width" : "serial-number-dog"}>
        <img src={image} alt="dog 7 image" className='dog-image' alt='gif of dog changing along with serial number'/>
        <h3 className="heading-3 size">{serialNumber}</h3>
    </div>
)

export default SerialNumberDog;