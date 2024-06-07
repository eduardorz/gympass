import { useState } from 'react'
import styles from './Login.module.css';

const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        nDni: ''
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

    return (
        <div>
          <h2>Registrarse</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.container}>
              <div>
                <label htmlFor="name">Nombre completo:</label>
                <input type="text" name="name" value={userData.name} required className={styles.input}/>
              </div>
              <div>
                <label htmlFor="age">Edad:</label>
                <input type="text" name="age" value={userData.age} required className={styles.input}/>
              </div>
              <div>
                <label htmlFor="email">Correo:</label>
                <input type="email" name="email" value={userData.email} required className={styles.input}/>
              </div>
              <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" value={userData.password} required className={styles.input}/>
              </div>
              <div>
                <label htmlFor="nDni">Número de DNI:</label>
                <input type="text" name="password" value={userData.nDni} required className={styles.input}/>
              </div>
              <div>
                <button type="submit" className={styles.button}>Registrarse</button>
              </div>
            </div>
          </form>
          {message && <div className={styles.message}>{message}</div>}
        </div>
      );
}

export default Register