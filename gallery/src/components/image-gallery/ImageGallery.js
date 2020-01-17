import React from 'react';
import styles from "./ImageGallery.module.css"
const ImageGallery = ({items}) => 
{
    return (
        <ul className={styles.ImageGallery}>
        {items.map(item => (
          <li key={item.id} className={styles.ImageGalleryItem}>
            <img
              src={item.webformatURL}
              data-source={item.largeImageURL}
              className={styles.ImageGalleryItem_image}
              alt="image"
          ></img>
          </li>
        ))}
      </ul>
    )
}

export default ImageGallery;