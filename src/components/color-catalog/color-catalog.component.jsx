import React from "react";

import './color-catalog.style.scss'

const ColorCatalog = ({type}) => (
    <div className="color-catalog">
        <span className='color-catalog__name'>{type}</span>
        <span className="color-catalog__color"></span>
        <span className="color-catalog__color"></span>
        <span className="color-catalog__color"></span>
        <span className="color-catalog__color"></span>
        <span className="color-catalog__color"></span>
        <span className="color-catalog__color"></span>
        <span className="color-catalog__color"></span>
        <span className="color-catalog__color"></span>
        <span className="color-catalog__color"></span>
        <span className="color-catalog__color"></span>
    </div>
)

export default ColorCatalog;