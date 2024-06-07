import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div>
            <img src={Logo} alt="logo" className={styles.navbarLogo}/>
        </div>
        <div className={styles.otherRoutes}>
          <Link className={styles.otherRoutes} to='/'>Home</Link>
          <Link className={styles.otherRoutes} to='/myAppointments'>Mis Turnos</Link>
          <Link className={styles.otherRoutes} to='/login'>Iniciar Sesión</Link>
        </div>
    </div>
  )
}

export default Navbar;
