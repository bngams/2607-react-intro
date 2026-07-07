import { useNavigate } from "react-router";
import reactLogo from "../assets/react.svg";

function Home() {
    const navigate = useNavigate();
    
    function scrollTo(elementId: string) {
        document.getElementById(elementId)?.scrollIntoView();
    }

    return (
        <>
            <div id="hero">
                <h1>My first React App</h1>
                <img src={reactLogo} alt="React" />
                <p>My super brand!</p>
                <button onClick={() => navigate("/products")}>Buy Products</button>
                <button onClick={() => scrollTo("intro")}>Continue</button>
            </div>
            <div id="intro">
                <h2>Welcome to my first React App</h2>
                <p>
                    This is a simple React application that demonstrates the use of React Router for navigation and routing. You can explore different pages and learn more about React.
                </p>
                {/* Emmet p>Lorem*5  */}
                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia, magni dolores vero recusandae dolorem fuga aliquid fugiat quidem totam quam a, quaerat est aut ullam, delectus odit mollitia laudantium.</span><span>Incidunt aut rem commodi eum consequatur deleniti aperiam, officia eos ullam! Quaerat dolorum harum sequi ducimus voluptates eligendi ipsam, accusamus nihil maiores, rerum soluta minima ullam ut, fuga excepturi consectetur!</span><span>Eius repellendus, odio asperiores voluptas animi architecto porro eveniet nemo minus, necessitatibus blanditiis ea impedit laboriosam dignissimos pariatur facere error vero dolore quaerat cupiditate inventore suscipit deserunt nam ducimus. Nesciunt.</span><span>Dolore eos pariatur nemo libero eveniet sit laudantium nesciunt sint quibusdam laboriosam, in debitis ex esse exercitationem cumque, saepe impedit explicabo dolor totam, asperiores sunt! Natus eligendi non earum nemo.</span><span>Incidunt saepe deserunt dolore numquam neque officia? Pariatur eos maxime cum et maiores in dolores dolorum iure culpa possimus unde, saepe tempora voluptate sint deleniti quia obcaecati. Labore, ea ipsam.</span></p>
            </div>
        </>
    );
}
export default Home;