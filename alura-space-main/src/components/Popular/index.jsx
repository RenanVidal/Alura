import React from 'react';
import popularPhotos from './popular-photos.json';
import styles from './Popular.module.scss';

export default function Popular() {
  return (
    <aside className={styles.popular} >
        <h2>Populares</h2>
        <ul className={styles.popular__images}>
            {popularPhotos.map((photos) => {
                return (
                    <li key={photos.id}>
                        <img src={photos.path} alt={photos.alt} />
                    </li>
                );
            })}
        </ul>
    </aside>
  )
}
