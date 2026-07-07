// 👉 À TOI DE JOUER
// Le parent gère le state "todos" et passe une fonction "addTodo" à AddTodo
// pour faire remonter une nouvelle tâche (lifting state up).

import { useState } from "react"
import AddTodo from "./AddTodo.jsx"
import TodoList from "./TodoList.jsx"

function TodoApp() {
    // todos: Array<{ id: number, title: string ... }>
    const [todos, setTodos] = useState([])

    // newTodo ? 
    // without Typescript => no idea about the type of newTodo
    // but we can assume it's a string (the title of the new todo)
    // newTodo: string
    // 
    // but it can also be an object with more properties (id, title, etc.)
    // newTodo: { id: number, title: string, ... }
    const addTodo = (newTodoTitle) => {
        // debugger vs console.log("...")
        // TODO: utiliser setTodos pour ajouter newTodo à la liste
        // const newTodos = [ ...todos, { id: Date.now(), title: newTodo }]
        // const newTodos = todos.concat({ id: Date.now(), title: newTodo })
        setTodos([...todos, { id: Date.now(), title: newTodoTitle }])
    }

    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo onAddTodo={addTodo} />
            <TodoList todoData={todos} />
        </div>
    )
}

export default TodoApp
