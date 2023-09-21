// import React, { useState } from 'react';
// import styles from './Index.module.css';
// import emotePicture from '../../../images/emote picture.png';
// import lipstick from '../../../images/dogy.jpeg';
// import box from '../../../images/cat.jpeg'
// import ducks from '../../../images/gaming.jpeg'
// import glacier from '../../../images/cats2.jpeg'
// import landscape from '../../../images/anime.jpeg'
// import link from '../../../images/anime (1).jpeg'
// import mug from '../../../images/anime3.jpeg'
// import buildings from '../../../images/anime4.jpeg'
// import outer from '../../../images/goat.jpeg'
// import anime5 from '../../../images/anime5.jpeg'
// import anime6 from '../../../images/anime6.jpeg'
// import emote1 from '../../../images/emote1.jpeg'
// import emote2 from '../../../images/emote2.jpeg'
// import emote3 from '../../../images/emote3.jpeg'
// import emote4 from '../../../images/emote4.jpeg'
// import emote5 from '../../../images/emote5.jpeg'
// import emote6 from '../../../images/emote6.jpeg'
// import emote7 from '../../../images/emote7.jpeg'
// import emote8 from '../../../images/emote8.jpeg'
// import emote9 from '../../../images/emote9.jpeg'
// const Index = () => {
//   const allImages = [emotePicture, lipstick, box, ducks, glacier, landscape, link, mug, buildings, outer,anime5,anime6,emote1,emote2,emote3,emote4,emote5,emote6,emote7,emote8,emote9];

//   const imagesPerClick = 2;
//   const [currentPage, setCurrentPage] = useState(0);
//   const [displayedImages, setDisplayedImages] = useState(allImages.slice(0, imagesPerClick * 2));

//   const handleSeeMoreClick = () => {
//     const newPage = currentPage + 1;
//     const startIndex = newPage * imagesPerClick * 2;
//     const endIndex = Math.min(startIndex + imagesPerClick * 2, allImages.length);
//     const newImages = allImages.slice(startIndex, endIndex);

//     setCurrentPage(newPage);
//     setDisplayedImages([...displayedImages, ...newImages]);
//   };

//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.mainHeading}>
//         <h1>Portfolio</h1>
//       </div>
//       <div className={styles.imagesContainer}>
//         {displayedImages.map((image, index) => (
//           index % 2 === 0 ? (
//             <div className={styles.topImageContainer} key={index}>
//               <img src={image} alt="" className={styles.emotePicture} />
//               {index + 1 < displayedImages.length && (
//                 <img src={displayedImages[index + 1]} alt="" className={styles.lipstickImage} />
//               )}
//             </div>
//           ) : null
//         ))}
//         {displayedImages.length < allImages.length && (
//           <div className={styles.buttonContainer}>
//             <button onClick={handleSeeMoreClick}>See more</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Index;

import React, { useState } from "react";
import styles from "./Index.module.css";
import category1Image1 from "../../../images/emote picture.png";
import category1Image2 from "../../../images/dogy.jpeg";
import category2Image1 from "../../../images/cat.jpeg";
import category2Image2 from "../../../images/gaming.jpeg";
import allImage1 from "../../../images/anime.jpeg";
import allImage2 from "../../../images/anime4.jpeg";
import outer from "../../../images/goat.jpeg";
import anime5 from "../../../images/anime5.jpeg";
import anime6 from "../../../images/anime6.jpeg";
import emote1 from "../../../images/emote1.jpeg";
import emote2 from "../../../images/emote2.jpeg";
import emote3 from "../../../images/emote3.jpeg";
import emote4 from "../../../images/emote4.jpeg";
import emote5 from "../../../images/emote5.jpeg";
import emote6 from "../../../images/emote6.jpeg";
import emote7 from "../../../images/emote7.jpeg";
import emote8 from "../../../images/emote8.jpeg";

// Portfolio

import ModelOne from "../../../images/portfolio/3D Model/5CCF0097-FC2F-484C-8742-AE43EA46CD72.jpeg";
import ModelTwo from "../../../images/portfolio/3D Model/77802A2D-2256-4676-B84C-56B078AA5CBB.jpeg";

import ArtSceneOne from "../../../images/portfolio/Art Scenes/32fc951c-97b5-4ee7-8997-2775aebe850f.jpeg";
import ArtSceneTwo from "../../../images/portfolio/Art Scenes/bb87c0c3-7d11-40c9-b9e0-6d61b277cd85.jpeg";
import ArtSceneThree from "../../../images/portfolio/Art Scenes/bb8b5a30-e324-49d3-899f-01a73e806ba0.mp4";
import ArtSceneFour from "../../../images/portfolio/Art Scenes/c15e130c-3471-4297-bbbb-d7ab9c1374d5.mp4";

import BadgeOne from "../../../images/portfolio/Badges/25d3be1f-f225-414b-9061-4d8b9306a7ee.jpeg";
import BadgeTwo from "../../../images/portfolio/Badges/955cfafe-dea6-47db-bdcf-5d54bf4db762.jpeg";
import BadgeThree from "../../../images/portfolio/Badges/B3FAB9E7-1CA4-440E-820B-24F0DD8C9BBD.jpeg";

import OverlayOne from "../../../images/portfolio/Overlay/0666e559-78b6-4021-a576-be5f3c55167f.jpeg";
import OverlayTwo from "../../../images/portfolio/Overlay/d24bbfa2-3111-4229-ba8b-eece5e8df1ad.mp4";
import OverlayThree from "../../../images/portfolio/Overlay/f405a9bc-8c45-4da3-9b55-8c97d7846611.mp4";
import OverlayFour from "../../../images/portfolio/Overlay/facc1ca8-1d0c-4c0e-8f07-d1aaff0a518d.mp4";

import emoteOne from "../../../images/portfolio/Emotes/09458623-5325-42B9-ABEC-35D9FC4AD31E.jpeg";
import emoteTwo from "../../../images/portfolio/Emotes/342C3C1E-ACD2-4ED9-9146-A8BCCD8A9DC1.jpeg";
import emoteThree from "../../../images/portfolio/Emotes/422bb1ca-a553-4c39-973a-6880defe94dc.jpeg";
import emoteFour from "../../../images/portfolio/Emotes/659068e4-e2e3-42ce-8796-9c146debf1f0.jpeg";
import emoteFive from "../../../images/portfolio/Emotes/6b191cb2-6492-4ef2-b532-d0d314c9db0b.jpeg";
import emoteSix from "../../../images/portfolio/Emotes/6c386333-bea7-4191-a723-1259f9b6764e.jpeg";
import emoteSeven from "../../../images/portfolio/Emotes/7BFD397E-6798-481A-8E1F-296020CD2903.jpeg";
import emoteEight from "../../../images/portfolio/Emotes/7b4f6657-a40e-47eb-bb75-abae7c974e23.jpeg";
import emoteNine from "../../../images/portfolio/Emotes/854f92cb-1631-4049-a53c-a791172a879e.jpeg";
import emoteTen from "../../../images/portfolio/Emotes/8893017c-ce19-414b-8390-6f5e9c3bab50.jpeg";
import emoteEleven from "../../../images/portfolio/Emotes/9816211f-e644-44ad-a02e-8a214a91dd08.jpeg";
import emoteTwelve from "../../../images/portfolio/Emotes/98b2c2ba-08ef-45f2-be53-86061d4ed38d.jpeg";
import emoteThirteen from "../../../images/portfolio/Emotes/9BCBCDE7-EF28-44E5-AE1C-3479CB8B6163.jpeg";
import emoteFourteen from "../../../images/portfolio/Emotes/A4099561-1285-4378-83C0-0E9FEBBD86C8.jpeg";
import emoteFifteen from "../../../images/portfolio/Emotes/B486D549-0ED1-4C5C-898C-FDEDC070DD4A.jpeg";
import emoteSixteen from "../../../images/portfolio/Emotes/IMG_2869.jpeg";
import emoteSeventeen from "../../../images/portfolio/Emotes/IMG_2878.jpeg";
import emoteEighteen from "../../../images/portfolio/Emotes/IMG_2944.jpeg";
import emoteNineteen from "../../../images/portfolio/Emotes/IMG_3075.jpeg";
import emoteTwenty from "../../../images/portfolio/Emotes/IMG_3076.jpeg";
import emoteTwentyOne from "../../../images/portfolio/Emotes/IMG_3077.jpeg";
import emoteTwentyTwo from "../../../images/portfolio/Emotes/IMG_3078.jpeg";
import emoteTwentyThree from "../../../images/portfolio/Emotes/IMG_3108.jpeg";
import emoteTwentyFour from "../../../images/portfolio/Emotes/IMG_3270.jpeg";
import emoteTwentyFive from "../../../images/portfolio/Emotes/a2bc097b-9946-42cb-a3c3-fe85c78f5d5b.jpeg";
import emoteTwentySix from "../../../images/portfolio/Emotes/d2ebf8d7-6439-4c64-8479-e6b5f9455836.jpeg";
import emoteTwentySeven from "../../../images/portfolio/Emotes/eda83c7c-d0a2-4b07-95dd-8829a0188bf0.jpeg";

import logoOne from "../../../images/portfolio/Logo/09e4b822-7125-4296-bd9f-5fc1cfe52329.jpeg";
import logoTwo from "../../../images/portfolio/Logo/IMG_2977.jpeg";
import logoThree from "../../../images/portfolio/Logo/e18f95d3-d1f3-4478-a7d7-2ba14bbabadb.jpeg";

const Index = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const handlePlay = (index) => {
    const video = document.getElementById(`video${index}`);
    const playButton = document.getElementById(`playButton${index}`);
    if (video && playButton) {
      if (video.paused || video.ended) {
        video
          .play()
          .then(() => {
            playButton.style.display = "none";
          })
          .catch((error) => {
            console.error("Error playing the video:", error);
          });
      } else {
        video.pause();
        playButton.style.display = "block";
      }
    }
  };
  const categories = {
    all: [
      allImage1,
      allImage2,
      category1Image1,
      category1Image2,
      category2Image1,
      category2Image2,
    ],
    TwoDModel: [category1Image1, category1Image2],
    ThreeDModel: [ModelOne, ModelTwo],
    ArtScenes: [ArtSceneOne, ArtSceneTwo, ArtSceneThree, ArtSceneFour],
    Badges: [BadgeOne, BadgeTwo, BadgeThree],
    Overlays: [OverlayOne, OverlayTwo, OverlayThree, OverlayFour],
    Intro: [outer, anime5, emote5, emote7],
    Emotes: [
      emoteOne,
      emoteTwo,
      emoteThree,
      emoteFour,
      emoteFive,
      emoteSix,
      emoteSeven,
      emoteEight,
      emoteNine,
      emoteTen,
      emoteEleven,
      emoteTwelve,
      emoteThirteen,
      emoteFourteen,
      emoteFifteen,
      emoteSixteen,
      emoteSeventeen,
      emoteEighteen,
      emoteNineteen,
      emoteTwenty,
      emoteTwentyOne,
      emoteTwentyTwo,
      emoteTwentyThree,
      emoteTwentyFour,
      emoteTwentyFive,
      emoteTwentySix,
      emoteTwentySeven,
    ],
    Logo: [logoOne, logoTwo, logoThree],
  };
  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeading}>
        <h1>Portfolio</h1>
      </div>
      <div className={styles.categoryButtons}>
        <button onClick={() => handleCategoryClick("TwoDModel")}>
          2D Model
        </button>
        <button onClick={() => handleCategoryClick("ThreeDModel")}>
          3D Model
        </button>
        <button onClick={() => handleCategoryClick("ArtScenes")}>
          Art Scenes
        </button>
        <button onClick={() => handleCategoryClick("Badges")}>Badges</button>
        <button onClick={() => handleCategoryClick("Overlays")}>
          Overlays
        </button>
        <button onClick={() => handleCategoryClick("Intro")}>
          Intro/Outro
        </button>
        <button onClick={() => handleCategoryClick("Emotes")}>Emotes</button>
        <button onClick={() => handleCategoryClick("Logo")}>Logo</button>
      </div>
      <div className={styles.imagesContainer}>
        {categories[currentCategory].map((item, index) => (
          <div className={styles.imageContainer} key={index}>
            {item.endsWith(".mp4") ? (
              <div className={styles.videoContainer}>
                <video className={styles.video} id={`video${index}`}>
                  <source src={item} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div
                  className={styles.playButton}
                  id={`playButton${index}`}
                  onClick={() => handlePlay(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className={styles.playIcon}
                  >
                    <path d="M16 10v28l22-14z" />
                  </svg>
                  {/* Pause Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className={styles.pauseIcon}
                  >
                    <path d="M14 38V10h6v28h-6zM28 10h6v28h-6V10z" />
                  </svg>
                </div>
              </div>
            ) : (
              <img
                src={item}
                alt={`Item ${index + 1}`}
                className={styles.image}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Index;
