import React from "react";
import { FaLandmark } from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #ff9933 0%, #ffffff 50%, #138808 100%)",
        padding: "18px 24px",
        fontSize: "30px",
        fontWeight: "800",
        color: "#0f172a",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <FaLandmark />
        <span>Tamil Nadu AI Government Scheme Assistant</span>
      </div>
    </div>
  );
}

export default Navbar;