import { useState } from "react";
import ProductsList from "./components/product/ProductsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";

export default function App() {
  const [id, setID] = useState(2);
  const [alert, setAlert] = useState({});

  return (
    <BrowserRouter>
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<ProductsList alert={alert} setAlert={setAlert} />}
          />
          <Route
            path="/add"
            element={<AddProduct setAlert={setAlert} id={id} setID={setID} />}
          />
          <Route
            path="/edit/:id"
            element={<EditProduct setAlert={setAlert} />}
          />
          <Route
            path="*"
            element={<ProductsList alert={alert} setAlert={setAlert} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
