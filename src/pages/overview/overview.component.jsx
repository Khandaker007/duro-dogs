import React from "react";

// COMPONENTS
import GameplayCard from "../../components/gameplay-card/gameplay-card.component";
import ActionCard from "../../components/action-card/action-card.component";
import SerialNumberDog from "../../components/serial-number-dog/serial-number-dog.component";

// IMAGE
import dog1 from '../../assets/image/dog-1.png'
import dog2 from '../../assets/image/dog-2.png'
import dog3 from '../../assets/image/dog-3.png'
import dog4 from '../../assets/image/dog-4.png'
import dog5 from '../../assets/image/dog-5.png'
import dog6 from '../../assets/image/dog-6.png'
import dog7 from '../../assets/image/dog-7.png'
import dog8 from '../../assets/image/dog-8.png'
import dog9 from '../../assets/image/dog-9.png'
import dog10 from '../../assets/image/dog-10.png'
import dogHome from '../../assets/image/dog-home.png'

// icon
import rightArrow from '../../assets/icon/right-arrow.svg'
import itemHat from '../../assets/icon/hat.svg'
import itemGlasses from '../../assets/icon/glasses.svg'
import itemCollar from '../../assets/icon/collar.svg'
import wallet from '../../assets/icon/wallet.svg'
import gamepad from '../../assets/icon/gamepad.svg'
import bitcoin from '../../assets/icon/bitcoin.svg'

import './overview.style.scss'
import '../../sass/typography.scss'

const Overview = () => {
    return(
        <div className="overview">
            <h1 className='heading-1-italic overview__heading'>Overview</h1>
            <div className="overview__content-section">
                <div className="content-navigation">
                    <h3 className="heading-3 content-navigation__heading">Contents:</h3>
                    <ol>
                        <li><a href="#intro">Introduction</a></li>
                        <li><a href="#durodog">How are Duro Dogs Made</a></li>
                        <ul>
                            <li><a href="#serialnumber"><span>2.1</span> Serial Number System</a></li>
                            <li><a href="#breakdown"><span>2.2</span> Rarity, Color and Anatomy</a></li>    
                        </ul>
                        <li><a href="#gameplay">Gameplay</a></li>
                        <ul>
                            <li><a href="#experience"><span>3.1</span> Experience</a></li>
                            <li><a href="#energy"><span>3.2</span> Energy</a></li>
                            <li><a href="#treats"><span>3.3</span> Treats</a></li>
                            <li><a href="#actionsystem"><span>3.4</span> Action System</a></li>
                            <li><a href="#cosmetics"><span>3.5</span> Cosmetics</a></li>
                        </ul>
                        <li><a href="#future">The Future of Duro Dogs</a></li>
                    </ol>
                </div>
                <div className="content-view">
                    <div className="image-container">
                        <img src={dog1} className='image' alt="dog 1 image"/>
                        <img src={dog2} className='image' alt="dog 2 image"/>
                        <img src={dog3} className='image' alt="dog 3 image"/>
                        <img src={dog4} className='image disable' alt="dog 4 image"/>
                        <img src={dog5} className='image disable' alt="dog 5 image"/>
                        <img src={dog6} className='image disable' alt="dog 6 image"/>
                    </div>
                    <div className="tag-line-container">
                        <h1 className='tag-line'>1 million <span className='half-line'>one-of-a-kind dogs with</span></h1>
                        <h1 className='tag-line'>1 million <span className='half-line'>combinations...</span></h1>
                    </div>
                </div>
            </div>

            <a name='intro'></a>
            <div className="overview__introduction-section">
                <h1 className="heading-1-italic pb-3">1. Introduction</h1>
                <p className='text'>In Duro Dogs, every dog is one-of-a-kind. All duro dogs are NFTs, which means your new virtual companion will be uniquely yours. Complete activities to level up your dog, learn new tricks, dig for rewards, and unlock rare items. Like your duro dog, all the items you earn are also NFTs that can be collected and traded. The path of your Duro Dog is totally up to you.</p>
            </div>            

            <a name='durodog'></a>
            <h1 className="heading-1-italic pb-3">2. How are Duro Dogs Made</h1>
            <div className="overview__duro-dogs-section">
                <a name="serialnumber"></a>
                <h2 className="heading-2-italic pb-3">Serial Number System</h2>
                <div className="serial-number">
                    .serial-number
                    <SerialNumberDog image={dog7} serialNumber='# 1,232,851' width/>
                    <div className="serial-number__description">
                        <p className='serial-number__description--text'>Each Duro Dog is born with a unique serial number that belongs to that dog alone. That serial number is then transformed and used to determine the characteristics of the dog. Color, style and anatomy are all determined by your Dog's Serial number. Since no two serial numbers match, no two dogs are totally alike. Your dog is yours and yours alone! </p>
                    </div>
                </div>
                <a name="breakdown"></a>
                <h2 className="heading-2-italic pb-3">Rarity, Color, Anatomy</h2>
                <div className="dog-category">
                    <div className="dog-category__description">
                        <p className='dog-category__description--text'>When it comes to dogs in the real world, not all traits and characteristics have an equal chance of occurring. You'll find Duro Dogs to be no different. In fact, the color of every Duro Dog is determined by a weighted rarity system. While the majority of our dogs may fit the traditional color scheme of pups around the world, there are quite a few with rare characteristics that make them especially vibrant. </p>
                    </div>
                    <div className="dog-category__type">
                        <div className="dog-category__type--common align-element">
                            <img src={dog7} alt="dog 7 image" className='dog-image' />
                            <span className='type-name common'>Common</span>
                        </div>
                        <div className="dog-category__type--rare align-element">
                            <img src={dog8} alt="dog 8 image" className='dog-image' />
                            <span className='type-name rare'>Rare</span>
                        </div>
                        <div className="dog-category__type--ultra-rare align-element">
                            <img src={dog9} alt="dog 9 image" className='dog-image' />
                            <span className='type-name ultra-rare'>Ultra-Rare</span>
                        </div>
                    </div>
                </div>
                <div className="breakdown-container">
                    <p className='breakdown-container__text'>To see a detailed breakdown of rarity, color and anatomy, please check out the link below:</p>
                    <button className='breakdown-container__button'> <span className='disable'>Duro Dog</span> Rarity Breakdown <img src={rightArrow} alt="right arrow icon" className='right-arrow' /></button>
                </div>
            </div>
            <a name="gameplay"></a>
            <h1 className="heading-1-italic pb-3">3. Gameplay</h1>
            <div className="overview__gameplay-section">
                <p className="overview__gameplay-section--text pb-3">The gameplay of Duro Dogs is based around 3 core values: Experience, Energy and Treats. Experience and Energy are both tied to a specific dog while Treats are tied to the dog owner. This means that treats earned by one dog can be spent on cosmetics/food for another! An explanation of each can be found below.</p>
                
                <a name="experience"></a>
                <a name="energy"></a>
                <a name="treats"></a>
                <div className="overview__gameplay-section--card-container">
                    <GameplayCard 
                        heading='Experience' 
                        level='3' 
                        complete='1305' 
                        total='1600' 
                        progressPercent='70%' 
                        text="Experience is a Duro Dog's main stat and is used to determine a Duro Dog's overall level. Experience is earned by using energy to complete play actions with your dog. As your Dog levels up, they will gain access to new actions, foods, items and rewards. New treats will lead to more treats, more cosmetics and more fun. Levels currently range from 1 to 10."
                    />
                    <GameplayCard
                        heading='Energy' 
                        level='3' 
                        complete='65' 
                        total='100'
                        progressPercent='65%'
                        colorGreen
                        text="In order to complete actions your dog will need energy! Energy is refilled over time at a rate of 1 energy per minute but can also be refilled instantly through the purchase of food.  Upon leveling up, your dog will also receive a completely replenished energy bar. Be sure to manage your Dog's energy wisely to max out the experience and rewards that they earn!"
                    />
                    <GameplayCard
                        heading='Treats' 
                        treats
                        text="Treats are the currency that make the Duro Dog world go round. They can be used to feed your dog, purchase cosmetics, or even risked for greater rewards via digging. Treats can be bought directly from the shop via BSV or earned through play actions and digging. Unlike experience and energy, treats are tied to your account rather than a single dog directly."
                    />
                </div>
                <a name="actionsystem"></a>
                <h2 className="heading-2-italic pb-3">Action System</h2>
                <p className='fs-2 pb-3'>Duro Dogs can perform three different types of actions at the playground. Those actions are split into Play Actions, Feed Actions, and Dig Actions. Each action has a different cost and reward that is associated with it. Those costs and rewards can include treats, energy, or even items in some cases. As you level up your Duro Dogs you'll find actions that produce better rewards the higher you climb!</p>
                <div className="overview__gameplay-section--action-container">
                    <div className="card-container">
                        <ActionCard 
                            action='play' 
                            heading='Play Actions'
                            description="Play actions are at the core of Duro Dog training and cost energy in exchange for treats and XP. The higher the energy cost, the more experience and treats you'll earn."
                        />
                    </div>
                    <div className="dog">
                        <img src={dog10} className='dog__image' alt="gif of common dog cycling through play animations" />
                    </div>
                </div>
                <div className="overview__gameplay-section--action-container">
                    <div className="dog">
                        <img src={dog10} className='dog__image' alt="gif of common dog cycling through food animations" />
                    </div>
                    <div className="card-container">
                        <ActionCard 
                            action='feed' 
                            heading='Feed Actions'
                            description="Feed actions are used to recover your Duro Dog's energy quickly and are the key to leveling up fast. The higher the price, the more energy you'll receive in return."
                        />                        
                    </div>
                </div>
                <div className="overview__gameplay-section--action-container">
                    <div className="card-container">
                        <ActionCard 
                            action='dig' 
                            heading='Dig Actions'
                            description="Dig actions are unique in that their rewards are not guaranteed. Dogs may find treats, a jackpot or even rare items only available through digging. Dig at your own risk!"
                        />
                    </div>
                    <div className="dog">
                        <img src={dog10} className='dog__image' alt="gif of dog doing Dig animation" />
                    </div>
                </div>
                <a name="cosmetics"></a>
                <h2 className="heading-2-italic pb-3">Cosmetics System</h2>
                <div className="overview__gameplay-section--cosmetics-container">
                    <div className="dress-up-container">
                        <div className="items">
                            <img src={itemHat} className='item-icon' alt="hat icon" />
                            <img src={itemGlasses} className='item-icon' alt="glasses icon" />
                            <img src={itemCollar} className='item-icon' alt="collar icon" />
                        </div>
                        <h1 className='heading-1-italic'>From</h1>
                        <img src={dogHome} className='dog-home-image' alt="dog home image" />
                    </div>
                    <div className="dog">
                        <img src={dog10} className='dog__image' alt="gif of dog doing Dig animation" />
                        <h1 className='heading-1-italic disable'>Get Your</h1>
                    </div>
                    <div className="description">
                        <p>What fun is a dog you can't dress up? Duro Dogs offers unique and stylish cosmetics that can be purchased from the in game store using Treats or directly via BSV. Currently Duro Dogs supports 3 different types of cosmetics: <span className='highlight'>hats</span>, <span className='highlight'>glasses</span> and <span className='highlight'>collars</span> with more to come. Each authentic decorative item has a serial number to ensure its uniqueness. Cosmetics are owned by users and can be transferred from one dog to another. Some cosmetics have a limited supply in circulation so be sure to get your paws on them quick before they're all sold out!</p>
                    </div>
                </div>

            </div>
            
            <a name="future"></a>
            <h1 className="heading-1-italic pb-4">4.The future of the Duro Dog</h1>
            <div className="overview__future">
                <div className="overview__future--option">
                    <img src={wallet} className='icon' alt="wallet icon" />
                    <p>All in game items (and dogs) are NFT assets that will be tradable on an open market coming soon.</p>
                </div>
                <div className="overview__future--option">
                    <img src={gamepad} className='icon' alt="gamepad icon" />
                    <p>Duro Dogs are designed for interoperability and can easily be extended and pulled into other 3rd party games. They're your new companion for exploring the metaverse.</p>
                </div>
                <div className="overview__future--option">
                    <img src={bitcoin} className='icon' alt="bitcoin icon" />
                    <p>Play to earn! Due to the rarity of both dogs and items, users can turn a profit with their gaming by selling earned assets on the open market.</p>
                </div>
            </div>
        </div>
    )
}

export default Overview;