import React from "react";

// ICON
import treatsIcon from '../../assets/icon/treats.svg'

import './gameplay-card.style.scss'

const GameplayCard = ({ heading, level, complete, total, progressPercent, colorGreen, text, treats }) => (
    <div className="gameplay-card">
        <h1 className='heading-1-italic'>{heading}</h1>
        {
            treats ?
            <img src={treatsIcon} className='treats-icon' alt="treats icon" />
            :
            <div className="gameplay-card__progress-bar">
                <span className={colorGreen ? 'level green-color' : 'level'}>{level}</span>
                <div className={colorGreen ? "progress-done change-color" : "progress-done"} style={{width: `${progressPercent}`}}></div>
                <span className='complete-number'>{complete} / {total}</span>
            </div>
        }
        <p className="gameplay-card__text">{text}</p>
    </div>
)

export default GameplayCard;