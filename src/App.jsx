import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Language from "./pages/Language";
import Symptoms from "./pages/Symptoms";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/language" element={<Language />} />

      <Route path="/symptoms" element={<Symptoms />} />

      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;



