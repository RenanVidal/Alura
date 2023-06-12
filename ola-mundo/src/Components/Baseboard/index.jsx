import React from 'react';
import styles from './Baseboard.module.css';
import { ReactComponent as Trademark } from 'assets/marca_registrada.svg';

export default function Baseboard() {
  return (
    <footer className={styles.baseboard}>
      <Trademark />
      Desenvolvido por Alura.
    </footer>
  );
}
