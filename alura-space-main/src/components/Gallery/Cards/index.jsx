import React from 'react'
import Card from './Card';

export default function Cards({itens, styles}) {
  return (
    <ul className={styles.gallery__cards}>
        {itens.map((item) => {
            return <Card key={item.id} item={item} style={styles} />;
        })}
    </ul>
  );
}

