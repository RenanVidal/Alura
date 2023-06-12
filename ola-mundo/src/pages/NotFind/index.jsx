import React, { Fragment } from 'react';
import styles from './NotFind.module.css';
import erro404 from 'assets/erro_404.png'
import MainButton from 'Components/MainButton';
import { useNavigate } from 'react-router-dom';

export default function NotFind() {
    const browse = useNavigate();
    return (
        <Fragment>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>
                    404
                </span>
                <h1 className={styles.title}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragraph}>
                    Tem certeza de que era isso que você estava procurando? 
                </p>
                <p className={styles.paragraph}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div 
                    className={styles.buttonContainer}
                    onClick={() => browse(-1)}
                >
                    <MainButton size="lg">Voltar</MainButton>
                </div>
                <img 
                    className={styles.dogPic}
                    src={erro404}
                    alt="Um cachorro da raça Lulu da Pomerania utilizando óculos e roupas em frete a um notebook" 
                />
            </div>
            <div className={styles.whiteSpace}>

            </div>
        </Fragment>
  )
}
