import Home from "../src/page/Home";
import ProductPage from "../src/page/ProductPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pid" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
