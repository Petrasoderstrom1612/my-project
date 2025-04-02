import { App } from "./App.jsx";

import { createRoot } from "react-dom/client"; //remember it is called createRoot !
const root = createRoot(document.getElementById("root"));


root.render(<App />); //no citation marks in the render method
