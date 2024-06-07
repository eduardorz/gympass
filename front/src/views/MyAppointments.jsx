import { useState } from "react";
import { Appointment } from "../components/Appointment";
import { myAppointments } from "../helpers/myTurns"

const MyAppointments = () => {
    const [Appointment] = useState(myAppointments);  // ! REVISAR

    return (
        <>
            <h1>Mis turnos</h1>
            <div>
            { Appointment.map((appoinment)=>{
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



// ! modificar el nombre de myTurns