import React from 'react';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import styles from './Footer.module.scss';

export default function Footer () {
    return (
        <Footer className={styles.footer}>
            <div className={styles.footer__icons}>
                <a href='https://www.facebook.com/aluracursosonline/' target='_blank' rel='noreferrer'>
                    <img src={facebook} alt="Logo do Facebook"/>
                </a>
                <a href='https://www.twitter.com/aluraonline' target='_blank' rel='noreferrer'>
                    <img src={twitter} alt="Logo do Twitter"/>
                </a>
                <a href='https://www.instagram.com/aluraonline' target='_blank' rel='noreferrer'>
                    <img src={instagram} alt="Logo do Instagram" />
                </a>
            </div>
            <p>Desenvolvido por Alura</p>
        </Footer>
    );
}