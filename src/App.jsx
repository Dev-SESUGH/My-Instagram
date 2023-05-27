import Nav from "./components/Nav";
import "./App.css";
import Bio from "./components/Bio";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Bio />
        <Gallery />
      </div>
    </>
  );
}

export default App;
