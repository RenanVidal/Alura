import React from 'react';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import styles from './Baseboard.module.scss';

export default function Baseboard() {
    return (
        <footer className={styles.baseboard}>
            <div className={styles.baseboard__icons}>
                <a href='https://www.facebook.com/aluracursosonline/' target='_blank' rel='noreferrer'>
                    <img src={facebook} alt="Logo do Facebook" />
                </a>
                <a href='https://www.twiimporttter.com/aluraonline' target='_blank' rel='noreferrer'>
                    <img src={twitter} alt="Logo do Twitter" />
                </a>
                <a href='https://www.instagram.com/aluraonline' target='_blank' rel='noreferrer'>
                    <img src={instagram} alt="Logo do Instagram" />
                </a>
            </div>
            <p>Desenvolvido por Alura</p>
        </footer>
    );
}