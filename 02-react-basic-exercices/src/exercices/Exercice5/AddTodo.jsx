// 👉 À TOI DE JOUER
// 1. Importe useState et crée un state local [value, setValue]
// 2. Implémente handleChange pour mettre à jour value
// 3. Dans handleSubmit, appelle onAddTodo(value) pour faire remonter
//    la nouvelle tâche au parent, puis réinitialise le champ

import { useState } from "react"

function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState("")

    const handleChange = (event) => {
        // TODO: setTitle(event.target.value)
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // the value is the title of the new todo
        // console.log("handleSubmit", title)
        // TODO: appeler onAddTodo avec la valeur saisie
        onAddTodo(title)
        // TODO: réinitialiser le champ
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="Nouvelle tâche..."
            />
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default AddTodo
