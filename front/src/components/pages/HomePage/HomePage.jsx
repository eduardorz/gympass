import React from 'react';
import styles from './HomePage.module.css';

import musculationImage from '../../../assets/musculation.png';
import crossfitImage from '../../../assets/crossfit.png';
import pliometricsImage from '../../../assets/pliometrics.png';
import swimmingImage from '../../../assets/swimmin.png';
import yogaImage from '../../../assets/yoga.png';
import spinningImage from '../../../assets/spinnin.png';
import footballImage from '../../../assets/football.png';
import athletismImage from '../../../assets/athletism.png';

import Footer from '../Footer/Footer'


function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles['hero-section']}>
        <div className={styles['welcome-text']}>
          <h1 className='text-3xl font-bold font-mono'>GYMPASS, UNA FORMA DISTINTA DE ENTRENAR</h1>
        </div>
        <div className={styles['welcome-text']}>
          <h2 className='text-3xl font-bold font-serif'>Reserva turnos para venir a entrenar a los mejores gimnasios de la ciudad</h2>
        </div>
      </div>

      {/* Contenedor de la galería de fotos */}
      <div className={styles['trainings-gallery']}>
        <h3 className='text-2xl font-bold text-white'>ALGUNOS DE NUESTROS ENTRENAMIENTOS DISPONIBLES...</h3>
        <div className={styles.gallery}>
          <img src={musculationImage} alt="Gimnasio" className={styles.galleryImage} />
          <img src={crossfitImage} alt="Crossfit" className={styles.galleryImage} />
          <img src={pliometricsImage} alt="Pliometría" className={styles.galleryImage} />
          <img src={swimmingImage} alt="Natación" className={styles.galleryImage} />
          <img src={yogaImage} alt="Yoga" className={styles.galleryImage} />
          <img src={spinningImage} alt="Spinning" className={styles.galleryImage} />
          <img src={footballImage} alt="Football" className={styles.galleryImage} />
          <img src={athletismImage} alt="Football" className={styles.galleryImage} />
        </div>
      </div>

      {/* Sección de Testimonios */}
      <section className={styles['testimonials-section']}>
        <h3 className='text-2xl font-bold'>y no lo decimos nosotros ...</h3>
        <div className={styles['testimonials-container']}>
          <div className={styles['testimonial']}>
            <blockquote>
              "Desde que comencé a usar Gympass, he mejorado mi rendimiento físico y la variedad de gimnasios disponibles es increíble."
            </blockquote>
            <p>- Juan Pérez, usuario frecuente</p>
          </div>
          <div className={styles['testimonial']}>
            <blockquote>
              "Gympass es la forma de cambiar las reglas del juego, en cuanto a entrenar se trata."
            </blockquote>
            <p>- Miguel González, usuario frecuente</p>
          </div>
          <div className={styles['testimonial']}>
            <blockquote>
              "Cuando descubrí Gympass, no quise irme nunca más."
            </blockquote>
            <p>- Facundo Soler, usuario frecuente</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
