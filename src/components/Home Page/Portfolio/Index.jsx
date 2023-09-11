import React from 'react'
import styles from './Index.module.css'
import emotePicture from '../../../images/emote picture.png'
import lipstick from '../../../images/lipstick.png'
const Index = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainHeading}>
                <h1>Portfolio</h1>
            </div>
            <div className={styles.imagesContainer}>
            <div className={styles.topImageContainer}>
             <img src={emotePicture} alt="" className={styles.emotePicture}/>
             <img src={lipstick} alt="" className={styles.lipstickImage}/>
            </div>
            <div className={styles.topImageContainer}>
             <img src={emotePicture} alt="" className={styles.emotePicture}/>
             <img src={lipstick} alt="" className={styles.lipstickImage}/>
            </div>
            <div className={styles.topImageContainer}>
             <img src={emotePicture} alt="" className={styles.emotePicture}/>
             <img src={lipstick} alt="" className={styles.lipstickImage}/>
            </div>
            <div className={styles.buttonContainer}>
                 
            </div>
            </div>
        </div>
    )
}

export default Index