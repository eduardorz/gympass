export const Appointment = ({date,time,status,description}) => {
    return (
        <div>
            <h4>{date}</h4>
            <h4>{time}</h4>
            <h4>{status}</h4>
            <h4>{description}</h4>
        </div>
    )
}
