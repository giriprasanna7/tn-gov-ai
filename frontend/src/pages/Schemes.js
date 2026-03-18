import React, { useMemo, useState } from "react";
import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { schemesData } from "../data/schemesData";

function Schemes() {
  const [search, setSearch] = useState("");

  const filteredSchemes = useMemo(() => {
    return schemesData.filter((scheme) => {
      const q = search.toLowerCase().trim();
      if (!q) return true;

      return (
        scheme.name.toLowerCase().includes(q) ||
        scheme.category.toLowerCase().includes(q) ||
        scheme.description.toLowerCase().includes(q) ||
        (scheme.keywords || []).some((k) => k.toLowerCase().includes(q))
      );
    });
  }, [search]);

  return (
    <div
      style={{
        padding: "28px",
        minHeight: "calc(100vh - 74px)",
        background: "linear-gradient(135deg, #ffedd5 0%, #fff 45%, #dcfce7 100%)"
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.82)",
          borderRadius: "22px",
          padding: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ marginTop: 0 }}>Government Schemes</h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#ffffff",
            borderRadius: "14px",
            padding: "12px 16px",
            marginBottom: "22px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.05)"
          }}
        >
          <FaSearch color="#1565c0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search from 50 schemes..."
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontSize: "16px",
              background: "transparent"
            }}
          />
        </div>

        <p style={{ color: "#475569", marginBottom: "18px" }}>
          Showing <b>{filteredSchemes.length}</b> schemes
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "18px"
          }}
        >
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
                transition: "transform 0.2s ease"
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#e3f2fd",
                  color: "#1565c0",
                  fontWeight: 700,
                  borderRadius: "999px",
                  padding: "6px 12px",
                  fontSize: "13px",
                  marginBottom: "12px"
                }}
              >
                {scheme.category}
              </div>

              <h3 style={{ marginTop: 0 }}>{scheme.name}</h3>
              <p style={{ color: "#475569", minHeight: "72px" }}>{scheme.description}</p>

              <button
                onClick={() => window.open(scheme.officialUrl, "_blank")}
                style={{
                  background: "#1565c0",
                  color: "#fff",
                  border: "none",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontWeight: 700
                }}
              >
                <FaExternalLinkAlt />
                Open Official Link
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schemes;