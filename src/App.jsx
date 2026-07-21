import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter basename="/portfolio-barbearia/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
