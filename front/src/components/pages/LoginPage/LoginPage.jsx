import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

function LoginPage() {
  const navigate = useNavigate();
  const handleClick = () => {
        navigate('/register');
  };
  return (
    <div className={styles.pageContainer}>
        <div className={styles.loginForm}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Correo requerido';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Correo inválido';
                }
                if (!values.password) {
                    errors.password = 'Contraseña requerida';
                }
                return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                }}
            >
                {({ isSubmitting }) => (
                <Form>
                    <h2>Iniciar Sesión</h2>
                    <div>
                        <Field type="email" name="email" placeholder="Correo electrónico" />
                        <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Contraseña" />
                        <ErrorMessage name="password" component="div" className={styles.errorMessage} />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Iniciar sesión
                    </button>
                    <a type="submit" onClick={handleClick} className={styles.linkButton}>
                        ¿Aún no eres usuario?
                    </a>

                </Form>
                )}
            </Formik>
        </div>
    </div>

  );
}

export default LoginPage;
