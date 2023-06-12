import React from 'react';
import styles from './Banner.module.css';
import coloredCircle from 'assets/circulo_colorido.png';
import myPic from 'assets/102068914.jpg'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.presentation}>
            <h1 className={styles.title}>
                Olá, mundo!
                <p className={styles.paragraph}>
                    Boas vindas ao meu espaço pessoal! Eu sou Renan Vidal Rodrigues, sou aluno de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </h1>
        </div>
        <div className={styles.images}>
            <img 
                className={styles.coloredCircle} 
                src={coloredCircle}
                aria-hidden={true}
                alt=''
            />
            <img 
                className={styles.myPic} 
                src={myPic} 
                alt="Foto do Renan Vidal de perfil com cara de bobo" 
            />
        </div>
    </div>
  )
}
