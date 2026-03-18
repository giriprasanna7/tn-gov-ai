import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaRobot, FaClipboardList, FaLayerGroup } from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  const items = [
    { label: "Home", path: "/", icon: <FaHome /> },
    { label: "AI Chat", path: "/chat", icon: <FaRobot /> },
    { label: "Eligibility", path: "/eligibility", icon: <FaClipboardList /> },
    { label: "Schemes", path: "/schemes", icon: <FaLayerGroup /> }
  ];

  return (
    <div
      style={{
        width: "240px",
        minHeight: "calc(100vh - 74px)",
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        padding: "26px 18px",
        borderRight: "1px solid rgba(0,0,0,0.08)"
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 18, color: "#0f172a" }}>Menu</h3>

      {items.map((item) => {
        const active = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: active ? "#ffffff" : "#0f172a",
              background: active ? "#1565c0" : "transparent",
              padding: "12px 14px",
              borderRadius: "12px",
              marginBottom: "10px",
              fontWeight: 700,
              boxShadow: active ? "0 8px 20px rgba(21,101,192,0.25)" : "none"
            }}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;