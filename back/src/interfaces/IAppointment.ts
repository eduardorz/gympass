interface IAppointment {
    id: number,
    date: number,
    time: number,
    userId: number,
    status: "active" | "canceled"
}

export default IAppointment;