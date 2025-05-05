import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Products from "./components/Products";
import Users from "./components/Users";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/users" element={<Users />} />
          <Route path="/prod" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
