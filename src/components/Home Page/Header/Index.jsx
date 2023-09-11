import React from 'react'
import styles from './Index.module.css'
import { FiTwitter } from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <h1>AMELI GFX</h1>
      </div>
      <div className={styles.optionsContainer}>
        <FiTwitter className={styles.twitterIcon}/>
        <RiDiscordLine className={styles.discordIcon}/>
      </div>
    </div>
  )
}

export default Index