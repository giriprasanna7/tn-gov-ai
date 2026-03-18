import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import ChatbotPage from "./pages/ChatbotPage";
import Eligibility from "./pages/Eligibility";
import Schemes from "./pages/Schemes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatbotPage />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/schemes" element={<Schemes />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;