import React, {useState} from "react";

// COMPONENTS
import SerialNumberDog from "../../components/serial-number-dog/serial-number-dog.component";
import ColorCatalog from "../../components/color-catalog/color-catalog.component";

// IMAGE
import dog3 from "../../assets/image/dog-3.png";
import dog7 from "../../assets/image/dog-7.png";
import dog8 from "../../assets/image/dog-8.png";
import dog9 from "../../assets/image/dog-9.png";
import dog10 from "../../assets/image/dog-10.png";

import comEye1 from "../../assets/image/common-eye-1.png";
import comEye2 from "../../assets/image/common-eye-2.png";
import comEye3 from "../../assets/image/common-eye-3.png";
import comEye4 from "../../assets/image/common-eye-4.png";
import comEye5 from "../../assets/image/common-eye-5.png";
import rareEye1 from "../../assets/image/rare-eye-1.png";
import rareEye2 from "../../assets/image/rare-eye-2.png";
import rareEye3 from "../../assets/image/rare-eye-3.png";
import ulRareEye1 from "../../assets/image/ul-rare-eye-1.png";
import ulRareEye2 from "../../assets/image/ul-rare-eye-2.png";

import comNose1 from "../../assets/image/common-nose-1.png";
import comNose2 from "../../assets/image/common-nose-2.png";
import comNose3 from "../../assets/image/common-nose-3.png";
import comNose4 from "../../assets/image/common-nose-4.png";
import rareNose1 from "../../assets/image/rare-nose-1.png";
import rareNose2 from "../../assets/image/rare-nose-2.png";

import spotHead from "../../assets/image/spot-head.png";
import spotBody from "../../assets/image/spot-body.png";
import spotTail from "../../assets/image/spot-tail.png";

import anaHead1 from "../../assets/image/anatomy-head-1.png";
import anaHead2 from "../../assets/image/anatomy-head-2.png";
import anaHead3 from "../../assets/image/anatomy-head-3.png";
import anaBody1 from "../../assets/image/anatomy-body-1.png";
import anaBody2 from "../../assets/image/anatomy-body-2.png";
import anaBody3 from "../../assets/image/anatomy-body-3.png";
import anaTail1 from "../../assets/image/anatomy-tail-1.png";
import anaTail2 from "../../assets/image/anatomy-tail-2.png";
import anaTail3 from "../../assets/image/anatomy-tail-3.png";
import anaEar1 from "../../assets/image/anatomy-ear-1.png";
import anaEar2 from "../../assets/image/anatomy-ear-2.png";
import anaEar3 from "../../assets/image/anatomy-ear-3.png";
import anaEye1 from "../../assets/image/anatomy-eye-1.png";
import anaEye2 from "../../assets/image/anatomy-eye-2.png";
import anaEye3 from "../../assets/image/anatomy-eye-3.png";
import anaNose1 from "../../assets/image/anatomy-nose-1.png";
import anaNose2 from "../../assets/image/anatomy-nose-2.png";
import anaNose3 from "../../assets/image/anatomy-nose-3.png";

// ICON
import DownArrow from '../../assets/icon/down-arrow.svg'

// SASS
import "./rarity.style.scss";
import "../../sass/typography.scss";

const Rarity = () => {

  const [iconRotate1, setIconRotate1] = useState(false)
    const [iconRotate2, setIconRotate2] = useState(false)
    const [iconRotate3, setIconRotate3] = useState(false)
    const [iconRotate4, setIconRotate4] = useState(false)
    const [iconRotate5, setIconRotate5] = useState(false)
    const [iconRotate6, setIconRotate6] = useState(false)
    const [visibleSection1, setVisibleSection1] = useState(false)
    const [visibleSection2, setVisibleSection2] = useState(false)
    const [visibleSection3, setVisibleSection3] = useState(false)
    const [visibleSection4, setVisibleSection4] = useState(false)
    const [visibleSection5, setVisibleSection5] = useState(false)
    const [visibleSection6, setVisibleSection6] = useState(false)
    
    const handleSection1 = () => {
        setIconRotate1(!iconRotate1)
        setVisibleSection1(!visibleSection1)
    }
    const handleSection2 = () => {
        setIconRotate2(!iconRotate2)
        setVisibleSection2(!visibleSection2)
    }
    const handleSection3 = () => {
        setIconRotate3(!iconRotate3)
        setVisibleSection3(!visibleSection3)
    }
    const handleSection4 = () => {
        setIconRotate4(!iconRotate4)
        setVisibleSection4(!visibleSection4)
    }
    const handleSection5 = () => {
        setIconRotate5(!iconRotate5)
        setVisibleSection5(!visibleSection5)
    }
    const handleSection6 = () => {
        setIconRotate6(!iconRotate6)
        setVisibleSection6(!visibleSection6)
    }

  return (
    <div className="rarity">
      <h1 className="heading-1-italic rarity__heading pb-2">Overview</h1>
      <h1 className="heading-1-italic pb-2">Summary</h1>
      <div className="rarity__summary">
        <p className="text">
          In Duro Dogs, every Dog is born with a unique serial number that is
          used to determine every aspect of the dog. From the dog's tail to the
          color of their eyes, no two dogs are identical. It fact, there are
          currently ######## unique possible outcomes for each Duro Dog.
        </p>
        <div className="serial-dog-group">
          <SerialNumberDog image={dog7} serialNumber="#1,134,521" />
          <SerialNumberDog image={dog3} serialNumber="#1,134,522" />
        </div>
      </div>
      <span className="heading-2-italic section-dropdown pb-2" onClick={handleSection1}><span><img src={DownArrow} className={iconRotate1 ? 'section-dropdown__icon reverse': 'section-dropdown__icon'} alt="down arrow icon" /></span> Rarity and Color</span>
      <div className={visibleSection1 ? "rarity__color visible" : "rarity__color"}>
        <p className="text pb-2">
          Although all dogs are unique, not all characteristics of the dog are
          equal in their occurrence. In fact, when it comes to color, Duro Dogs
          have three separate levels of rarity. We refer to those levels as
          <span className="common">Common</span>,{" "}
          <span className="rare">Rare</span>, and{" "}
          <span className="ul-rare">Ultra-Rare</span>. Generally speaking,
          <span className="common">Common</span> colors have a 90% chance of
          occurrence, while <span className="rare">Rare</span> colors have a 9%
          and <span className="ul-rare">Ultra-Rare</span> a 1%. Rarity effects
          the color of fur, eyes and nose, each of which are independently
          selected.
        </p>
        <div className="rarity__color--status">
          <div className="common-per container">
            <span className="type">Common</span>
            <span className="percentage">90%</span>
          </div>
          <div className="rare-per container">
            <span className="type">Rare</span>
            <span className="percentage">9%</span>
          </div>
          <div className="ultra-rare-per container">
            <span className="type">Ultra-Rare</span>
            <span className="percentage">1%</span>
          </div>
        </div>
      </div>
      <span className="heading-2-italic section-dropdown pb-2" onClick={handleSection2}><span><img src={DownArrow} className={iconRotate2 ? 'section-dropdown__icon reverse': 'section-dropdown__icon'} alt="down arrow icon" /></span> Fur Color<span className='disable'>:</span></span>
      <div className={visibleSection2 ? "rarity__fur-color visible" : "rarity__fur-color"}>
        <p className="text pb-2">
          For most Duro Dogs, fur color is determined through a random selection
          of a dominant and secondary color pool. These colors follow the rarity
          rates above and are selected based on the serial number of the dog. A
          breakdown of each color's rarity can be found below.
        </p>
        <div className="dog-container">
          <h2 className="heading-2 common-heading heading pb-3">
            Common Dog:{" "}
            <span className="heading-part-2">
              Common Dominant + Common Secondary Color
            </span>
          </h2>
          <div className="image-container">
            <img
              src={dog10}
              className="dog-img"
              alt="gif of common dog swapping colors"
            />
          </div>
          <div className="group">
            <ColorCatalog type="Dominent" />
            <ColorCatalog type="Secondary" />
          </div>
          <p className="text common-text">
            Common fur colors make up 90% of Duro Dogs and can be recognized by
            their more traditional color patterns. Each dog is created by
            selecting a fur color from both the dominant and secondary color
            pools.
          </p>
        </div>
        <div className="dog-container">
          <h2 className="heading-2 rare-heading heading pb-3">
            Rare Dog:{" "}
            <span className="heading-part-2">
              Rare Dominant color + Common Secondary color
            </span>
          </h2>
          <div className="image-container">
            <img
              src={dog8}
              className="dog-img"
              alt="gif of rare dog swapping colors"
            />
          </div>
          <div className="group">
            <ColorCatalog type="Dominent" />
            <ColorCatalog type="Secondary" />
          </div>
          <p className="text rare-text">
            Rare fur colors make up 9% of Duro Dogs and can be recognized from
            their atypical colors. While their secondary colors are selected
            from a more traditional color pool, their dominant colors are more
            vibrant and fun.
          </p>
        </div>
        <div className="dog-container">
          <h2 className="heading-2 ul-rare-heading heading pb-3">
            Ultra Rare Dog:{" "}
            <span className="heading-part-2">
              Twenty Unique Color Combinations
            </span>
          </h2>
          <div className="image-container">
            <img
              src={dog9}
              className="dog-img"
              alt="gif of rare dog swapping colors"
            />
          </div>
          <div className="group">
            <ColorCatalog type="Dominent" />
            <ColorCatalog type="Secondary" />
          </div>
          <p className="text ul-rare-text">
            Ultra-Rare fur colors make up just 1% of our dogs and can be
            recognized by their distinctive complexions. In comparison to our
            other dogs, ultra-rare fur is created from 1 of 10 possible color
            pairings rather than selected from separate pools for dominant and
            secondary. Each pairing can be flipped for dominant and secondary
            colors adding up to a total of 20 unique combinations.
          </p>
        </div>
      </div>
      <span className="heading-2-italic section-dropdown pb-2" onClick={handleSection3}><span><img src={DownArrow} className={iconRotate3 ? 'section-dropdown__icon reverse': 'section-dropdown__icon'} alt="down arrow icon" /></span> Eye Color<span className='disable'>:</span></span>
      <div className={visibleSection3 ? "rarity__eye-color visible" : "rarity__eye-color"}>
        <p className="text pb-4">
          Much like our dog's fur color, the color of the our Duro Dog's eyes
          are determined by a ranked rarity system.{" "}
          <span className="common">Common eye</span> colors make up 90% of our
          dogs while <span className="rare">rare eyes</span> make up 9% and{" "}
          <span className="ultra-rare">ultra rare eyes</span> just 9%. Something
          to note, rare eye colors and rare fur colors are selected
          independently from each other so there are no guarantees a dog with
          rare fur will have rare eyes as well.{" "}
        </p>
        <div className="eye-container">
          <div className="common-eye container">
            <h3 className="heading-3 pb-2 heading">Common Eyes</h3>
            <div className="group-eye">
              <img src={comEye1} className="eye-image" alt="common eye image" />
              <img src={comEye2} className="eye-image" alt="common eye image" />
            </div>
            <div className="group-eye">
              <img src={comEye3} className="eye-image" alt="common eye image" />
              <img src={comEye4} className="eye-image" alt="common eye image" />
            </div>
            <img src={comEye5} className="eye-image" alt="common eye image" />
          </div>
          <div className="rare-eye container">
            <h3 className="heading-3 pb-2 heading">Rare Eyes</h3>
            <img src={rareEye1} className="eye-image" alt="rare eye image" />
            <img src={rareEye2} className="eye-image" alt="rare eye image" />
            <img src={rareEye3} className="eye-image" alt="rare eye image" />
          </div>
          <div className="ultra-rare-eye container">
            <h3 className="heading-3 pb-2 heading">Ultra Rare Eyes</h3>
            <img
              src={ulRareEye1}
              className="eye-image"
              alt="ultra rare eye image"
            />
            <img
              src={ulRareEye2}
              className="eye-image"
              alt="ultra rare eye image"
            />
          </div>
        </div>
      </div>
      <span className="heading-2-italic section-dropdown pb-2" onClick={handleSection4}><span><img src={DownArrow} className={iconRotate4 ? 'section-dropdown__icon reverse': 'section-dropdown__icon'} alt="down arrow icon" /></span> Nose Color<span className='disable'>:</span></span>
      <div className={visibleSection4 ? "rarity__nose-color visible" : "rarity__nose-color"}>
        <p className="text pb-4">
          Following the same pattern as our dog's fur and eyes, nose color is
          also determined by a ranked rarity system. The exception with noses is
          that there are no ultra-rare nose colors, meaning that{" "}
          <span className="common">common</span> noses make up 90% of our dogs
          while <span className="rare">rare</span> noses occur in 10% of dogs.
        </p>
        <div className="nose-container">
          <div className="common-nose container">
            <h3 className="heading-3 pb-2 heading">Common Noses</h3>
            <div className="group">
              <img
                src={comNose1}
                className="nose-image"
                alt="common nose image"
              />
              <img
                src={comNose2}
                className="nose-image"
                alt="common nose image"
              />
            </div>
            <div className="group">
              <img
                src={comNose3}
                className="nose-image"
                alt="common nose image"
              />
              <img
                src={comNose4}
                className="nose-image"
                alt="common nose image"
              />
            </div>
          </div>

          <div className="rare-nose container">
            <h3 className="heading-3 pb-2 heading">Rare Noses</h3>
            <div className="group">
              <img
                src={rareNose1}
                className="nose-image"
                alt="rare nose image"
              />
              <img
                src={rareNose2}
                className="nose-image"
                alt="rare nose image"
              />
            </div>
          </div>
        </div>
      </div>      
      <span className="heading-2-italic section-dropdown pb-2" onClick={handleSection5}><span><img src={DownArrow} className={iconRotate5 ? 'section-dropdown__icon reverse': 'section-dropdown__icon'} alt="down arrow icon" /></span> Spots<span className='disable'>:</span></span>
      <div className={visibleSection5 ? "rarity__spots visible" : "rarity__spots"}>
        <p className="text pb-4">
          Real dogs are rarely without patterns and Duro Dogs are no different!
          Each tail, head, and body have a 50% chance of having a spotted fur
          pattern meaning that only 1 in every 8 dogs will be completely solid
          colored. Those who receive a dog without spots can count themselves as
          lucky!
        </p>
        <div className="body-part">
          <img src={spotTail} className="image image-tail" alt="tail image" />
          <img src={spotHead} className="image image-head" alt="head image" />
          <img src={spotBody} className="image image-body" alt="body image" />
        </div>
      </div>
      <span className="heading-2-italic section-dropdown pb-2" onClick={handleSection6}><span><img src={DownArrow} className={iconRotate6 ? 'section-dropdown__icon reverse': 'section-dropdown__icon'} alt="down arrow icon" /></span> Anatomy<span className='disable'>:</span></span>
      <div className={visibleSection6 ? "rarity__anatomy visible" : "rarity__anatomy"}>
        <p className="text pb-4">
          Although color is an important part of the equation, it is far from
          the only element that makes your Duro Dog uniquely yours. The look of
          your dog is also based on the design of its body and face. In Duro
          Dogs, each dog has an equal chance to receive 1 of 3 possible designs
          for each part of their body. A breakdown of those parts can be found
          below:{" "}
        </p>
        <div className="body-parts">
          <div className="head container">
            <h2 className="heading-2-italic">Heads:</h2>
            <div className="group">
              <img src={anaHead1} className="head-image" alt="dog head image" />
              <img src={anaHead2} className="head-image" alt="dog head image" />
              <img src={anaHead3} className="head-image" alt="dog head image" />
            </div>
          </div>
          <div className="body container">
            <h2 className="heading-2-italic">Bodies:</h2>
            <div className="group">
              <img src={anaBody1} className="body-image" alt="dog body image" />
              <img src={anaBody2} className="body-image" alt="dog body image" />
              <img src={anaBody3} className="body-image" alt="dog body image" />
            </div>
          </div>
          <div className="tail container">
            <h2 className="heading-2-italic">Tails:</h2>
            <div className="group">
              <img src={anaTail1} className="tail-image" alt="dog tail image" />
              <img src={anaTail2} className="tail-image" alt="dog tail image" />
              <img src={anaTail3} className="tail-image" alt="dog tail image" />
            </div>
          </div>
          <div className="ear container">
            <h2 className="heading-2-italic">Ears:</h2>
            <div className="group">
              <img src={anaEar1} className="ear-image" alt="dog ear image" />
              <img src={anaEar2} className="ear-image" alt="dog ear image" />
              <img src={anaEar3} className="ear-image" alt="dog ear image" />
            </div>
          </div>
          <div className="eye container">
            <h2 className="heading-2-italic">Eyes:</h2>
            <div className="group">
              <img src={anaEye1} className="eye-image" alt="dog eye image" />
              <img src={anaEye2} className="eye-image" alt="dog eye image" />
              <img src={anaEye3} className="eye-image" alt="dog eye image" />
            </div>
          </div>
          <div className="nose container">
            <h2 className="heading-2-italic">Noses:</h2>
            <div className="group">
              <img src={anaNose1} className="nose-image" alt="dog nose image" />
              <img src={anaNose2} className="nose-image" alt="dog nose image" />
              <img src={anaNose3} className="nose-image" alt="dog nose image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
