import React from 'react';
import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <div className={styles.loadMoreBtnWrapper}>
    <button className={styles.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreBtn;