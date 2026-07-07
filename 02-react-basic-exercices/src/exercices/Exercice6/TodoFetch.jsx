// 👉 À TOI DE JOUER
// - Importe useState ET useEffect
// - Dans useEffect, fetch l'API et stocke les todos dans le state
// - Affiche les todos dans la liste

import { useState, useEffect } from "react"

function TodoFetch() {
    const [todos, setTodos] = useState([])

    // fetch("https://dummyjson.com/todos?limit=10")
    //     .then((response) => response.json()) // parse la réponse en JSON
    //     .then((data) => setTodos(data.todos)) // utilise le setter pour stocker data.todos

    // useEffect(() => {
    //     // GET. https://dummyjson.com/todos?limit=10
    //     fetch("https://dummyjson.com/todos?limit=10")
    //         .then((response) => response.json()) // parse la réponse en JSON
    //         .then((jsonData) => setTodos(jsonData.todos)) // utilise le setter pour stocker data.todos
    // }, []) // le tableau vide [] signifie que l'effet ne s'exécute qu'une seule fois au montage du composant

    useEffect(() => {
        const fetchTodos = async () => {
            // GET. https://dummyjson.com/todos?limit=10
            const myResponse = await fetch("https://dummyjson.com/todos?limit=10");
            const myJsonData = await myResponse.json();
            setTodos(myJsonData.todos);
        };
        
        fetchTodos();
    }, []) // le tableau vide [] signifie que l'effet ne s'exécute qu'une seule fois au montage du composant

    return (
        <div>
            <h2>Todos depuis l'API</h2>
            <ul>
                {/* TODO: todos.map((todo) => <li key={todo.id}>{todo.todo}</li>) */}
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoFetch
