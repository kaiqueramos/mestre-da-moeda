import React from 'react';
import styles from '../styles/TermosDeUso.module.css'; // Importe o CSS Module

function TermosDeUso() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Termos de Uso</h1>
      <p className={styles.content}>
        Estes termos de uso regem o uso do nosso site... (adicione o conteúdo dos termos de uso aqui)
      </p>
    </div>
  );
}

export default TermosDeUso;