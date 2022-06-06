import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authenticate from "./Components/Authenticate";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Products from "./Components/Products";
import Question from "./Components/Question";

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route element={<Authenticate />}>
          <Route element={<Layout />}>

            <Route path="/products" element={<Products />} />
            <Route path="/question" element={<Question />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
