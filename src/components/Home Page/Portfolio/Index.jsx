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







import React, { useState } from 'react';
import styles from './Index.module.css';
import category1Image1 from '../../../images/emote picture.png';
import category1Image2 from '../../../images/dogy.jpeg';
import category2Image1 from '../../../images/cat.jpeg';
import category2Image2 from '../../../images/gaming.jpeg';
import allImage1 from '../../../images/anime.jpeg';
import allImage2 from '../../../images/anime4.jpeg';
import outer from '../../../images/goat.jpeg'
import anime5 from '../../../images/anime5.jpeg'
import anime6 from '../../../images/anime6.jpeg'
import emote1 from '../../../images/emote1.jpeg'
import emote2 from '../../../images/emote2.jpeg'
import emote3 from '../../../images/emote3.jpeg'
import emote4 from '../../../images/emote4.jpeg'
import emote5 from '../../../images/emote5.jpeg'
import emote6 from '../../../images/emote6.jpeg'
import emote7 from '../../../images/emote7.jpeg'
import emote8 from '../../../images/emote8.jpeg'
import emote9 from '../../../images/emote9.jpeg'

const Index = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const categories = {
    all: [allImage1, allImage2,category1Image1, category1Image2,category2Image1, category2Image2],
    TwoDModel: [category1Image1, category1Image2],
    ThreeDModel: [category2Image1, category2Image2],
    Overlays:[],
    Intro:[],
    Emotes:[],
    Logo:[]
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
        <button onClick={() => handleCategoryClick("TwoDModel")}>2D Model</button>
        <button onClick={() => handleCategoryClick("ThreeDModel")}>3D Model</button>
        <button onClick={() => handleCategoryClick("Overlays")}>Overlays</button>
        <button onClick={() => handleCategoryClick("Intro")}>Intro/Outro</button>
        <button onClick={() => handleCategoryClick("Emotes")}>Emotes</button>
        <button onClick={() => handleCategoryClick("Logo")}>Logo</button>
      </div>

      <div className={styles.imagesContainer}>
        {categories[currentCategory].map((image, index) => (
          <div className={styles.imageContainer} key={index}>
            <img src={image} alt={`Image ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
