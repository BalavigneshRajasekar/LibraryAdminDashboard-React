import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Books from "./components/Books";
import Author from "./components/Author";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/Books" element={<Books></Books>}></Route>
          <Route path="/Author" element={<Author></Author>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
