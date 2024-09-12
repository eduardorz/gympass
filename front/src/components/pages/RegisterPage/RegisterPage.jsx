import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './RegisterPage.module.css'; // Importa los estilos

// Esquema de validación con Yup
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'El nombre es muy corto')
    .max(50, 'El nombre es muy largo')
    .required('El nombre es requerido'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Confirme su contraseña'),
});

const RegisterPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.registerForm}>
        <h2>Registrarse</h2>
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log(values);
            // Aquí puedes agregar la lógica para manejar el registro del usuario
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.formGroup}>
                <h4>Nombre</h4>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className={styles.inputField}
                />
                <ErrorMessage name="name" component="div" className={styles.errorMessage} />
              </div>

              <div className={styles.formGroup}>
                <h4>Correo Electrónico</h4>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={styles.inputField}
                />
                <ErrorMessage name="email" component="div" className={styles.errorMessage} />
              </div>

              <div className={styles.formGroup}>
                <h4>Contraseña</h4>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={styles.inputField}
                />
                <ErrorMessage name="password" component="div" className={styles.errorMessage} />
              </div>

              <div className={styles.formGroup}>
                <h4>Confirmar Contraseña</h4>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className={styles.inputField}
                />
                <ErrorMessage name="confirmPassword" component="div" className={styles.errorMessage} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                Registrarse
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
