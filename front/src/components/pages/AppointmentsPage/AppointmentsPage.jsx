import React, { useState, useEffect } from 'react';
import styles from './AppointmentsPage.module.css';

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de obtención de datos de turnos
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        // Reemplaza la URL con la de tu API
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
    // Aquí podrías actualizar los turnos basados en la fecha seleccionada
  };

  const handleReserve = (id) => {
    // Lógica para reservar un turno
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === id ? { ...appointment, reserved: !appointment.reserved } : appointment
      )
    );
  };

  return (
  
  <div className={styles.pageContainer}>
      
      <h1 className={styles.title}>Turnos Disponibles</h1>
      
      <div className={styles.filterContainer}>
        <label className={styles.dateTitle} htmlFor="date">Selecciona una fecha:</label>
        <input 
          type="date" 
          id="date" 
          value={selectedDate} 
          onChange={handleDateChange} 
          className={styles.dateInput}
        />
      </div>

      {loading ? (
        <p>Cargando turnos...</p>
      ) : (
        <div className={styles.appointmentsList}>
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
    </div>
    
  );
}

export default AppointmentsPage;
