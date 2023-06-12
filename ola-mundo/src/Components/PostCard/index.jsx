import React from 'react';
import styles from './PostCard.module.css';
import { Link } from 'react-router-dom';
import MainButton from 'Components/MainButton';

export default function PostCard({post}) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
          <img 
              className={styles.cover}
              src={`/assets/posts/${post.id}/capa.png`} 
              alt='Imagem de capa do post' 
          />
          <h2 className={styles.title}>
              {post.titulo}
          </h2>
          <MainButton>Ler</MainButton>
      </div>
      </Link>
  );
}
