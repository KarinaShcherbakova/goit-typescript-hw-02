import React from 'react';
import { ImageData } from '../../services/api';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: ImageData[];
  onImageClick: (image: ImageData) => void; 
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return <p>No images found. Try searching something else!</p>;
  }

  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.imageItem}>
          <div className={styles.imageCard} onClick={() => onImageClick(image)}>
            <img src={image.urls.small} alt={image.alt_description || 'Image'} />
            <div className={styles.imageInfo}>
              <p>{image.user.name}</p>
              <p>{image.likes} likes</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;