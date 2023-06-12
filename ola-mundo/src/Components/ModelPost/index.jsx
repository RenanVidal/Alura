import React from 'react';
import styles from './ModelPost.module.css';
import { children } from 'react';

export default function ModelPost({children, coverPic, title}) {
  return (
    <article className={styles.modelPostContainer}>
        <div 
            className={styles.coverPic}
            style={{backgroundImage: `url(${coverPic})`}}    
        ></div>
        <h2 className={styles.title}>
            {title}
        </h2>
        <div className={styles.contentPostContainer}>
            {children}
        </div>
    </article>
  )
}
