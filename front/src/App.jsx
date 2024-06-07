import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import MyAppointments from './views/MyAppointments';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/myAppointments' element={<MyAppointments />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
}

export default App
