import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Books from "./components/Books";
import Author from "./components/Author";

function App() {
  return (
    <div className="App ">
      <h1>Admin dashoard</h1>
      <Books></Books>
      <Author></Author>
    </div>
  );
}

export default App;
