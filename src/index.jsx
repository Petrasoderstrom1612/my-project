import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { MainComponent } from "./components/MainComponent.jsx";

import { createRoot } from "react-dom/client"; //remember it is called createRoot !
const root = createRoot(document.getElementById("root"));

const DisplayFacts = () => {
  return (
    <>
      <main className="main">
        <Header />
        <MainComponent />
        <Footer />
      </main>
    </>
  );
}

root.render(<DisplayFacts />); //no citation marks in the render method
