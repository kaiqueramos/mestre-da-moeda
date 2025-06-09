import React from 'react';
import styles from '../styles/PoliticaPrivacidade.module.css'; // Importe o CSS Module

function PoliticaPrivacidade() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Política de Privacidade</h1>
            <p className={styles.content}>
                Nossa política de privacidade descreve como coletamos, usamos e protegemos suas informações... (adicione o conteúdo da política de privacidade aqui)
            </p>
        </div>
    );
}

export default PoliticaPrivacidade;