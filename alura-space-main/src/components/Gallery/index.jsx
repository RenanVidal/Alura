import React from 'react'
import styles from './Gallery.module.scss';
import Tags from '../Tags';
import Cards from './Cards';
import photos from './photos.json';

export default function Gallery() {
  return (
    <section className={styles.gallery}>
        <h2>Navegue Pela Galeria</h2>
        <Tags />
        <Cards itens={photos} styles={styles}/>
    </section>
  )
}
