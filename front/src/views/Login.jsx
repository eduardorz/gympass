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
      <form onSubmit={handleSubmit} class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h2 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Inicia Sesión</h2>
        <div className={styles.container}>
          <div class="mb-4">
            <label htmlFor="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" >Correo Electrónico:</label>
            <input type="email" name="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={userData.email} onChange={handleChange} required className={styles.input}/>
          </div>
          <div class="mb-4">
            <label htmlFor="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contraseña:</label>
            <input type="password" name="password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={userData.password} onChange={handleChange} required className={styles.input}/>
            <a href="#"
					class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
          </div>
          <div class="flex items-center justify-between mb-4">
				<div class="flex items-center">
					<input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
					<label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
				</div>
				<a href="#"
					class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
					Account</a>
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
