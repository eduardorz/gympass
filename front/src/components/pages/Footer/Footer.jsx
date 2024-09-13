import React from 'react';
import styles from './Footer.module.css'; // Asegúrate de crear este archivo CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <img src="/src/assets/logo.png" alt="Logo" className={styles.logoImage} />
        </div>
        <div className={styles.info}>
          <h4>Contacto</h4>
          <p>Teléfono: +54 11 1234-5678 (Argentina)</p>
          <p>Teléfono: +58 212-1234567 (Venezuela)</p>
          <p>Email: contacto@gympass.ar</p>
          <p>Email: contacto@gympass.ve</p>
        </div>
        <div className={styles.branches}>
          <h4>Sucursales</h4>
          <p>Buenos Aires, Argentina</p>
          <p>Mar del Plata, Argentina</p>
          <p>Caracas, Venezuela</p>
          <p>Valencia, Venezuela</p>
        </div>
        <div className={styles.socialMedia}>
          <h4>Síguenos</h4>
          <a href="#" className={styles.socialLink}>Facebook</a>
          <a href="#" className={styles.socialLink}>Instagram</a>
          <a href="#" className={styles.socialLink}>Tiktok</a>
          <a href="#" className={styles.socialLink}>X</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
