import React, {useState, useEffect} from "react";

// IMAGE
import playActions from '../../assets/image/play-actions.png'
import feedActions from '../../assets/image/feed-actions.png'
import digActions from '../../assets/image/dig-actions.png'

// ICON
import ActionLightningIcon from '../../assets/icon/action-lightning.svg'

import './action-card.style.scss'
import '../../sass/typography.scss'

const ActionCard = ({action, heading, description}) => {

    const [actionImage, setActionImage] = useState()
    
    const handleActionImage = (actionType) => {
        if (actionType == 'play') {
            setActionImage(playActions)
        }
        else if(actionType == 'feed'){
            setActionImage(feedActions)
        }
        else if(actionType == 'dig'){
            setActionImage(digActions)
        }
    }

    useEffect(() => {
        handleActionImage(action)      
    }, [])
    
    return(
            <div className="action-card">
                <div className="action-card__header">
                    <h3 className='heading-3-italic pb-2'>{heading}</h3>
                    <img src={actionImage} className='image' alt="play actions image" />
                </div>
                <div className="action-card__description">
                    <p className="fs-2 pb-2">{description}</p>
                    <div className="reward-container">
                        <span>Cost: <img className='icon' src={ActionLightningIcon} alt="lightning icon" /></span>
                        <span>Reward: <img className='icon' src={ActionLightningIcon} alt="lightning icon" /></span>
                    </div>
                </div>
            </div>
)}

export default ActionCard;