import './App.css';
import Navbar from './components/pages/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import AppointmentsPage from './components/pages/AppointmentsPage/AppointmentsPage';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/myAppointments' element={<AppointmentsPage />} />
            </Routes>
        </>
    )
}

export default App
