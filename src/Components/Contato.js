import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de Escrever" />
      <div className={styles.dados}>
        <h1>Entre em contato.</h1>
        <ul>
          <li>andreiv007@gmail.com</li>
          <li>00 00000-0000</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
