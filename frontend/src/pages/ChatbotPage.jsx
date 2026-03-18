import React, { useMemo, useState } from "react";
import { FaExternalLinkAlt, FaPaperPlane, FaRobot } from "react-icons/fa";
import { schemesData } from "../data/schemesData";

function ChatbotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello 👋 Tell me what help you need. Example: student scholarship, farmer subsidy, women support, pension, health."
    }
  ]);

  const matchedSchemes = useMemo(() => {
    const q = input.toLowerCase().trim();
    if (!q) return [];
    return schemesData.filter((scheme) => {
      return (
        scheme.name.toLowerCase().includes(q) ||
        scheme.category.toLowerCase().includes(q) ||
        scheme.description.toLowerCase().includes(q) ||
        (scheme.keywords || []).some((k) => q.includes(k) || k.includes(q))
      );
    }).slice(0, 5);
  }, [input]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const topMatches = schemesData.filter((scheme) => {
      const q = input.toLowerCase();
      return (
        scheme.name.toLowerCase().includes(q) ||
        scheme.category.toLowerCase().includes(q) ||
        scheme.description.toLowerCase().includes(q) ||
        (scheme.keywords || []).some((k) => q.includes(k) || k.includes(q))
      );
    }).slice(0, 3);

    let botReply = "Please explain more.";
    if (topMatches.length > 0) {
      botReply = `I found ${topMatches.length} matching scheme(s) for "${input}". Scroll below to open the official links.`;
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      { role: "bot", text: botReply }
    ]);
    setInput("");
  };

  const quickQueries = ["student scholarship", "farmer subsidy", "women welfare", "senior citizen pension"];

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
          maxWidth: "980px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.82)",
          borderRadius: "24px",
          padding: "24px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ marginTop: 0, display: "flex", alignItems: "center", gap: 12 }}>
          <FaRobot color="#1565c0" />
          Tamil Nadu AI Chat Assistant
        </h1>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
          {quickQueries.map((q) => (
            <button
              key={q}
              onClick={() => setInput(q)}
              style={{
                background: "#e3f2fd",
                border: "none",
                color: "#1565c0",
                fontWeight: 700,
                padding: "8px 12px",
                borderRadius: "999px",
                cursor: "pointer"
              }}
            >
              {q}
            </button>
          ))}
        </div>

        <div
          style={{
            minHeight: "240px",
            maxHeight: "320px",
            overflowY: "auto",
            background: "#ffffff",
            borderRadius: "18px",
            padding: "18px",
            boxShadow: "inset 0 0 0 1px #e2e8f0"
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                marginBottom: "12px",
                display: "flex",
                justifyContent: message.role === "user" ? "flex-end" : "flex-start"
              }}
            >
              <div
                style={{
                  maxWidth: "75%",
                  padding: "12px 14px",
                  borderRadius: "16px",
                  background: message.role === "user" ? "#1565c0" : "#f1f5f9",
                  color: message.role === "user" ? "#fff" : "#0f172a",
                  fontWeight: 500
                }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about schemes..."
            style={{
              flex: 1,
              padding: "14px 16px",
              borderRadius: "14px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "16px"
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              background: "#1565c0",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              padding: "0 18px",
              cursor: "pointer",
              fontWeight: 700
            }}
          >
            <FaPaperPlane />
          </button>
        </div>

        {matchedSchemes.length > 0 && (
          <div style={{ marginTop: 22 }}>
            <h3>Suggested Schemes</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 16
              }}
            >
              {matchedSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  style={{
                    background: "#fff",
                    borderRadius: "18px",
                    padding: "18px",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.05)"
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: "#1565c0",
                      fontWeight: 800,
                      marginBottom: 8
                    }}
                  >
                    {scheme.category}
                  </div>
                  <h4 style={{ marginTop: 0 }}>{scheme.name}</h4>
                  <p style={{ color: "#475569" }}>{scheme.description}</p>
                  <button
                    onClick={() => window.open(scheme.officialUrl, "_blank")}
                    style={{
                      background: "#16a34a",
                      color: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      padding: "10px 14px",
                      cursor: "pointer",
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      fontWeight: 700
                    }}
                  >
                    <FaExternalLinkAlt />
                    Official Link
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatbotPage;