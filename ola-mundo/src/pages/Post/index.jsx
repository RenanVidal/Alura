import React from 'react';
import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import ModelPost from 'Components/ModelPost';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css';
import NotFind from 'pages/NotFind';
import DefaultPage from 'Components/DefaultPage';
import styles from './Post.module.css';
import PostCard from 'Components/PostCard';

export default function Post() {
    const parameters = useParams();
    const post =  posts.find((post) => {
        return post.id === Number(parameters.id);
    });

    if (!post) {
        return <NotFind />
    }

    const recommendedPosts = posts
        .filter((post) => post.id !== Number(parameters.id))
        .sort((a, b) => b.id - a.id )
        .slice(0, 4);


    return (
        <DefaultPage>
            <ModelPost
                coverPic={`/assets/posts/${post.id}/capa.png`}
                title={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                    <h2 className={styles.titleOuthersPosts}>Outros posts que você pode gostar:</h2>
                    <ul className={styles.recommendedPosts}>
                        {recommendedPosts.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>
                </div>
            </ModelPost>     
        </DefaultPage>       
    );
}
