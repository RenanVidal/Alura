import React from 'react'
import styles from './Gallery.module.scss';
import Tags from '../Tags';
import Cards from './Cards';
import photos from './photos.json';

export default function Gallery() {
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((value) = value.tag))];

  const filterPhotos = (tag) => {
    const newPhoto = photos.filter((photo) => {
      return photo.tag === tag;
    })

    setItens(newPhoto);
  }
  return (
    <section className={styles.gallery}>
        <h2>Navegue Pela Galeria</h2>
        <Tags tags={tags} filterPhotos={filterPhotos} />
        <Cards itens={itens} styles={styles}/>
    </section>
  )
}
