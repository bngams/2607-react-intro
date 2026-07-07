import { useEffect, useState } from 'react'
import { type TodoItem }  from '../models/TodoItem'

function Todo() {

    const [ todos, setTodos ] = useState<TodoItem[]>([])

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://dummyjson.com/todos?limit=10')
                // TODO: create a type for the response data and use it here
                const data = await response.json() as { todos: TodoItem[], total: number, skip: number, limit: number } 
                setTodos(data.todos)
            } catch (error) {
                console.error('Error fetching todos:', error)
            }
        }

        fetchTodos()
    }, [])

    return (
        <div className="todo">
            <h1>Todo</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.todo}</li>
                ))}
            </ul>
        </div>
    )

}

export default Todo