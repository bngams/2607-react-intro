import { todos } from "./todos.js"

// 👉 À TOI DE JOUER
// Affiche la liste des tâches avec .map().
// Si le tableau est vide, affiche "Pas de tâches".

function TodoList() {

    // let listJSX = null;
    // if(todos.length === 0) {
    //     listJSX = <p>Pas de tâches</p>;
    // } else {
    //     listJSX = todos.map((todo) => (
    //         <li key={todo.id}>
    //             {todo.todo} {todo.completed ? "(terminé)" : "(en cours)"}
    //         </li>
    //     ));
    // }

    const listJSX = todos.length === 0 ? (
        <p>Pas de tâches</p>
    ) : (
        todos.map((todo) => (
            <li key={todo.id}>
                {todo.todo} {todo.completed ? "(terminé)" : "(en cours)"}
            </li>
        ))
    )

    return (
        <div>
            <h2>Liste des tâches</h2>
            <ul>
                {/* TODO: utiliser .map() sur todos pour afficher chaque tâche */}
                { listJSX }
            </ul>
            <ul>
                {todos.length === 0 ? (
                    <p>Pas de tâches</p>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.todo} {todo.completed ? "(terminé)" : "(en cours)"}
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default TodoList
