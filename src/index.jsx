import { createRoot } from "react-dom/client"; //remember it is called createRoot !

const root = createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <header className="header">
      <img src="src/assets/react.svg" className="logo" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

function DisplayFacts() {
  return (
    <>
      <main className="main">
        <Header />
        <ul>
          <li>Was first release in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
      <footer>
        <small>
          © {new Date().getFullYear()} Söderström development. All rights
          reserved.
        </small>
      </footer>
    </>
  );
}

root.render(<DisplayFacts />); //no citation marks in the render method
