import Nav from "./components/Nav";
import "./App.css";
import Bio from "./components/Bio";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Bio />
      </div>
    </>
  );
}

export default App;
