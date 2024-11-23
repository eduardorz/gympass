import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './RegisterPage.module.css'; // Importa los estilos
import trainingImage from '../../../assets/training.jpg';


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
  dni: Yup.string()
    .required('El DNI es requerido'),
  age: Yup.number()
    .required('La edad es requerida'),
  phone: Yup.string()
    .required('El teléfono es requerido'),
  birthday: Yup.date()
    .required('La fecha de nacimiento es requerida'),
  address: Yup.string()
    .required('La dirección es requerida'),
  city: Yup.string()
    .required('La ciudad es requerida'),
  country: Yup.string()
    .required('El país es requerido'),
});

const RegisterPage = () => {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
      <div className={styles.registerForm}>
        <h2>Registrarse</h2>
        <Formik
          initialValues={{
            name: '', email: '', password: '', confirmPassword: '', dni: '', age: '', phone: '',
            birthday: '', address: '', city: '', country: ''
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // Evita que el botón se quede deshabilitado permanentemente
            setSubmitting(true);
          
            fetch('http://localhost:3003/users/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Error en el registro');
                }
                return response.json();
              })
              .then((data) => {
                alert('¡Registro exitoso!');
                resetForm(); // Limpia el formulario
              })
              .catch((error) => {
                alert('Hubo un problema: ' + error.message);
              })
              .finally(() => {
                setSubmitting(false); // Habilita el botón nuevamente
              });
          }}
        >
          {({ isSubmitting }) => (
            <div className={styles.formContainer}>
            <div className={styles.imageSection}>
              <img src={trainingImage} alt="Entrenamiento" className={styles.trainingImage} />
              
            </div>
          
            <div className={styles.registerForm}>
              <Form>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>Nombre</h4>
                    <Field type="text" name="name" className={styles.inputField} />
                    <ErrorMessage name="name" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>Correo Electrónico</h4>
                    <Field type="email" name="email" className={styles.inputField} />
                    <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>Contraseña</h4>
                    <Field type="password" name="password" className={styles.inputField} />
                    <ErrorMessage name="password" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>Confirmar Contraseña</h4>
                    <Field type="password" name="confirmPassword" className={styles.inputField} />
                    <ErrorMessage name="confirmPassword" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>DNI</h4>
                    <Field type="text" name="dni" className={styles.inputField} />
                    <ErrorMessage name="dni" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>Edad</h4>
                    <Field type="number" name="age" className={styles.inputField} />
                    <ErrorMessage name="age" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>Teléfono</h4>
                    <Field type="text" name="phone" className={styles.inputField} />
                    <ErrorMessage name="phone" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>Fecha de Nacimiento</h4>
                    <Field type="date" name="birthday" className={styles.inputField} />
                    <ErrorMessage name="birthday" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>Dirección</h4>
                    <Field type="text" name="address" className={styles.inputField} />
                    <ErrorMessage name="address" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>Ciudad</h4>
                    <Field type="text" name="city" className={styles.inputField} />
                    <ErrorMessage name="city" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <h4 className={styles.fieldTitle}>País</h4>
                    <Field type="text" name="country" className={styles.inputField} />
                    <ErrorMessage name="country" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  Registrarse
                </button>
              </Form>
            </div>
          </div>
          )}
        </Formik>
      </div>
      </main>
    </div>
  );
};

export default RegisterPage;
