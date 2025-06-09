import React from 'react';
import styles from '../styles/Contato.module.css'; // Importe o CSS Module

function Contato() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contato</h1>
            <p className={styles.content}>
                Entre em contato conosco através do formulário abaixo ou pelo e-mail...
            </p>
            {/* Adicione um formulário de contato aqui, se necessário */}
        </div>
    );
}

export default Contato;