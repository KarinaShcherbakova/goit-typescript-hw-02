import React from 'react';
import styles from './ImageCard.module.css';

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description?: string;
}

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description || 'Image'} />
    </div>
  );
};

export default ImageCard;