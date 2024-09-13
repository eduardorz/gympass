import './App.css';
import Navbar from './components/pages/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import AppointmentsPage from './components/pages/AppointmentsPage/AppointmentsPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import Footer from './components/pages/Footer/Footer';


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/myAppointments' element={<AppointmentsPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
