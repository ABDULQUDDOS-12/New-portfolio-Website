import React from 'react'
import styles from './Index.module.css'
import { FiTwitter } from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <h1>BELLA MORRI</h1>
      </div>
      <div className={styles.optionsContainer}>
       <a href=""> <FiTwitter className={styles.twitterIcon}/></a>
       <a href=""> <RiDiscordLine className={styles.discordIcon}/>  </a>
      </div>
    </div>
  )
}

export default Index