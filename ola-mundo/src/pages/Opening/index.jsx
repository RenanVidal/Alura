import React from 'react';
import styles from './Opening.module.css';
import posts from 'json/posts.json';
import PostCard from 'Components/PostCard';

export default function Opening() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
      ))}
    </ul>
  );
}
