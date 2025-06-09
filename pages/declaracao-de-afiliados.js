import React from 'react';
import styles from '../styles/DeclaracaoAfiliados.module.css'; // Importe o CSS Module

function DeclaracaoAfiliados() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Declaração de Afiliados</h1>
            <p className={styles.content}>
                Esta declaração divulga nossa relação de afiliados com outros sites... (adicione o conteúdo da declaração de afiliados aqui)
            </p>
        </div>
    );
}

export default DeclaracaoAfiliados;