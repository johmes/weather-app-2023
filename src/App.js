import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.jsx";
import { Home, OneDay, ThreeDays, NoPage } from "./pages/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route path="/oneDay/:id" element={<OneDay />} />
          <Route path="/threeDays/:id" element={<ThreeDays />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;