import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { MainComponent } from "./components/MainComponent.jsx";


export const App = () => {
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