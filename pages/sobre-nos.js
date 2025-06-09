import React from 'react';
import styles from '../styles/SobreNos.module.css'; // Importe o CSS Module

function SobreNos() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre Nós</h1>
            <p className={styles.content}>
                Somos uma empresa dedicada a... (adicione o conteúdo sobre a sua empresa aqui)
            </p>
        </div>
    );
}

export default SobreNos;