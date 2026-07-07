// 👉 À TOI DE JOUER
// 1. Importe useState
// 2. Crée un state [todo, setTodo] initialisé à ""
// 3. Implémente handleChange (met à jour le state + console.log)
// 4. Implémente handleSubmit (affiche une alerte avec la valeur)

import { useState } from "react"

function AddTodo() {
    const [todo, setTodo] = useState("")

    const handleChange = (event) => {
        console.log(event)
        // TODO: mettre à jour le state avec event.target.value
        setTodo(event.target.value)
        // TODO: console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        // TODO: alert(todo) ou console.log(todo)
        alert(todo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleChange} />
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default AddTodo
