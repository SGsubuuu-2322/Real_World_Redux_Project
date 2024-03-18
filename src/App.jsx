// import React from 'react'

import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Products from "./Components/Products";

const App = () => {
  return (
    <div>
      <nav className="py-5 container bg-red-200 m-auto p-6 mt-2 flex justify-center gap-10">
        <Link
          className="text-red-900 hover:underline hover:underline-offset-2"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-red-900 hover:underline hover:underline-offset-2"
          to="/users"
        >
          Users
        </Link>
        <Link
          className="text-red-900 hover:underline hover:underline-offset-2"
          to="/products"
        >
          Products
        </Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
