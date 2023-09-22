import React from "react";
import styles from "./Index.module.css";
import { FiTwitter } from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <h1>Bella Morri</h1>
      </div>
      <div className={styles.optionsContainer}>
        <a href="https://twitter.com/bella_morri" target="__blank">
          <FiTwitter className={styles.twitterIcon} />
        </a>
        <a href="http://discord.com/users/1074831040943751199" target="__blank">
          <RiDiscordLine className={styles.discordIcon} />
        </a>
      </div>
    </div>
  );
};

export default Index;
