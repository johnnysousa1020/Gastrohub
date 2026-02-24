import { useState } from "react";
import "./Reserve.css"

function Reserve(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        people: ""
    })

    const [success, setSuccess] = useState(false)

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        const existingReservations = JSON.parse(localStorage.getItem("reservations")) || [];

        const updatedReservations = [
            ...existingReservations,
            { ...formData, id: Date.now() }
        ]

        localStorage.setItem(
            "reservations",
            JSON.stringify(updatedReservations)
        )

            setSuccess(true)

        setFormData({
            name: "",
            email: "",
            date: "",
            time: "",
            people: ""
        })

        setTimeout(() => {
            setSuccess(false)
        }, 4000)
    }

    return(
        <div className="reserve-container">
            <h1>Reserva de Mesa</h1>

            {success && (
                <div className="success-message">
                    Reserva realizada com sucesso!
                </div>
            )}

            <form className="reserve-from" onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required/>

                <input 
                type="email" 
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required/>

                <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required/>

                <input 
                type="time" 
                name="time"
                value={formData.time}
                onChange={handleChange}
                required/>

                <input 
                type="number" 
                name="people"
                placeholder="Número de pessoas"
                min="1" 
                value={formData.people}
                onChange={handleChange}
                required/>

                <button type="submit">Confirmar Reserva</button>
            </form>
        </div>
    )
}

export default Reserve;