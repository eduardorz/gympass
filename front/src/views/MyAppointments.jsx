import { useState } from "react";
import { myTurns } from "../helpers/myTurns"
import Appointment from "../components/Appointment"

const MyAppointments = () => {
    const [turns, setTurns] = useState(myTurns);  // ! REVISAR

    return (
        <>
            <h1>Mis turnos</h1>
            <div>
            { turns.map((appoinment)=>{
                    return (
                        <Appointment
                            key={appoinment.id}
                            date={appoinment.date}
                            time={appoinment.time}
                            status={appoinment.status}
                            description={appoinment.description}
                        />
                    )
                }) }
            </div>
        </>
    )
}

export default MyAppointments;
