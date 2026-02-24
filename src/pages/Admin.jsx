import { useEffect, useState } from "react"
import "./Admin.css"

function Admin(){
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("reservations")) || []
        setReservations(stored)
    }, [])

    function handleDelete(id){
        const updated = reservations.filter(r => r.id !== id)
        localStorage.setItem("reservations",
            JSON.stringify(updated))
            setReservations(updated)
    }

    return(
        <div className="admin-container">
            <h1>Painel Administrativo</h1>

            {reservations.length === 0 ? (
                <p>Nenhuma reserva encontrada.</p>
            ) : (

                <div className="reservations-list">
                    {reservations.map(res => (
                        <div key={res.id} className="reservation-card">
                            <h3>{res.name}</h3>
                            <p>Email: {res.email}</p>
                            <p>Date: {res.date}</p>
                            <p>Hórario: {res.time}</p>
                            <p>Pessoas: {res.people}</p>

                            <button onClick={() => handleDelete(res.id)}>
                                Excluir
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Admin;