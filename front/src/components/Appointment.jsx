const Appointment = ({date,time,status,description}) => {
    return (
        <div>
            <h4>{date}</h4>
            <h4>Time: {time}</h4>
            <h4>Status: {status}</h4>
            <h4>Description: {description}</h4>
        </div>
    )
}

export default Appointment;