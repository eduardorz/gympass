import React, { useState, useEffect } from 'react';
import styles from './AppointmentsPage.module.css';
import Footer from '../Footer/Footer'

import caracasHQ from '../../../assets/sucursal_2.png';
import valenciaHQ from '../../../assets/sucursal_3.png';
import buenosairesHQ from '../../../assets/sucursal_1.png';
import mardelplataHQ from '../../../assets/sucursal_4.png';


function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3003/appointments');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleReserve = (id) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === id ? { ...appointment, reserved: !appointment.reserved } : appointment
      )
    );
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Turnos Disponibles</h1>

      {/* Sección para filtrar por fecha */}
      <div className={styles.filterContainer}>
        <label className={styles.dateTitle} htmlFor="date">Selecciona una fecha </label>
        <input 
          type="date" 
          id="date" 
          value={selectedDate} 
          onChange={handleDateChange} 
          className={styles.dateInput}
        />
      </div>

      {/* Cuadro de turnos */}
      {loading ? (
        <p>Cargando turnos...</p>
      ) : (
        <div className={styles.appointmentsListContainer}>
          {appointments.map(appointment => (
            <div key={appointment.id} className={styles.appointmentItem}>
              <span className={styles.time}>{appointment.time}</span>
              <span className={styles.description}>{appointment.description}</span>
              <button 
                className={appointment.reserved ? styles.cancelButton : styles.reserveButton}
                onClick={() => handleReserve(appointment.id)}
              >
                {appointment.reserved ? 'Cancelar' : 'Reservar'}
              </button>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AppointmentsPage;
