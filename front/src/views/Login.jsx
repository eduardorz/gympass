import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './Login.module.css';


function LoginUser() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('URL_DEL_API_REGISTRO', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Registro exitoso. ¡Bienvenido!');
      } else {
        setMessage('Error en el registro: ' + data.message);
      }
    } catch (error) {
      console.error('Error en la petición:', error);
      setMessage('Ocurrió un error al registrar el usuario. Por favor, inténtalo nuevamente.');
    }
  };

  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    };

  return (
    <div>
      <h2>Inicia Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} required className={styles.input}/>
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} required className={styles.input}/>
          </div>
          <div>
            <button type="submit" className={styles.button}>Ingresar</button>
            <button type="submit" className={styles.button} onClick={handleClick}>¿Aún no eres usuario?</button>
          </div>
        </div>
      </form>
      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
}

export default LoginUser;
