// 👉 À TOI DE JOUER
// Complète ce composant pour qu'il reçoive une prop "name"
// et affiche "Hello [name] !".

// <Greeting name="Alice" /> doit afficher "Hello Alice !"
// props est un objet qui contient toutes les props passées au composant
function Greeting({ name, id }) {
    return <h1>Hello {name} !</h1>
}

export default Greeting
