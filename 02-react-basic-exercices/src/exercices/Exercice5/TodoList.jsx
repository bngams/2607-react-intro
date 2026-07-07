// 👉 À TOI DE JOUER
// Affiche la liste reçue en props avec .map().

function TodoList({ todoData }) {
    return (
        <ul>
            {todoData.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}

export default TodoList
