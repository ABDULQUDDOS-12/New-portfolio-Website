import React from 'react'
import styles from './Index.module.css'
import animePicture from '../../../images/anime picture.png'
const Index = () => {
  return (
    <div className={styles.mainContainer}>
       <div className={styles.imageContainer}>
        <img src={animePicture} alt="" className={styles.animePicture}/>
        <h1>AMELI GFX</h1>
       </div>
       <div className={styles.textContainer}>
       <p>Passionate about well-balanced designs, I deliver exceptional user experiences, merging form and function to create captivating solutions. Turning visions into design reality.</p>
       </div>
       <div className={styles.chooseMeContainer}>
       <div className={styles.leftHandContainer}>
       <h1>Why Choose Me ?</h1>
       </div>
       <div className={styles.rightHandContainer}>
        <p>As a seasoned design professional, I seamlessly merge aesthetics and functionality, creating captivating projects. With a track record of surpassing expectations, I infuse creativity into tangible outcomes. Collaborate with me for innovative designs that yield impactful results, elevating your vision and user experiences.</p>
       </div>
       </div>
    </div>
  )
}

export default Index