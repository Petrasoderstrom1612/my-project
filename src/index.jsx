import {createRoot} from "react-dom/client" //remember it is called createRoot !

const root = createRoot(document.getElementById("root"))


function DisplayFacts () {
    return(
    <main>
        <img src="src/assets/react.svg" width="40px" alt="React logo" />
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
    )
}

root.render(<DisplayFacts />) //no citation marks in the render method

