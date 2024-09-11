import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles['hero-section']}>
        <div className={styles['welcome-text']}>
          <h1 className='text-3xl font-bold font-mono'>BIENVENIDO A GYMPASS</h1>
        </div>
        <div className={styles['welcome-text']}>
          <h2 className='text-3xl font-bold font-serif'>Reserva turnos para venir a entrenar a los mejores gimnasios de la ciudad</h2>
        </div>
        
      </div>
      <div className={styles['additional-content']}>
        {/* Aquí va el contenido adicional */}
      </div>
    </div>
  )
}

export default HomePage;