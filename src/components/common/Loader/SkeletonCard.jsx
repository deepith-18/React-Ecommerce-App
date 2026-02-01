import React from 'react';
import styles from './Loader.module.css';

/**
 * SkeletonCard - Loading placeholder for product cards
 * Improves perceived performance during data fetching
 */
export const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>
      <div className={styles.skeletonContent}>
        <div className={`${styles.skeleton} ${styles.skeletonTitle}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonPrice}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonButton}`}></div>
      </div>
    </div>
  );
};