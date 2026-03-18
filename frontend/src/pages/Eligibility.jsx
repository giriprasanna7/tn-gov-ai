import React, { useMemo, useState } from "react";
import { FaExternalLinkAlt, FaFilter } from "react-icons/fa";
import { schemesData } from "../data/schemesData";

function Eligibility() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    occupation: "",
    gender: "",
    need: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const recommendations = useMemo(() => {
    const ageNum = Number(form.age || 0);
    const occ = form.occupation.toLowerCase().trim();
    const need = form.need.toLowerCase().trim();
    const gender = form.gender.toLowerCase().trim();

    return schemesData.filter((scheme) => {
      const genderMatch = !scheme.gender || scheme.gender === gender;
      const occupationMatch =
        !scheme.occupation || scheme.occupation.toLowerCase() === occ;

      const ageMinMatch = !scheme.minAge || ageNum >= scheme.minAge;
      const ageMaxMatch = !scheme.maxAge || ageNum <= scheme.maxAge;

      const keywordMatch =
        !need ||
        scheme.name.toLowerCase().includes(need) ||
        scheme.category.toLowerCase().includes(need) ||
        scheme.description.toLowerCase().includes(need) ||
        (scheme.keywords || []).some((k) => k.toLowerCase().includes(need));

      return genderMatch && occupationMatch && ageMinMatch && ageMaxMatch && keywordMatch;
    }).slice(0, 12);
  }, [form]);

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
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          gap: "22px"
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
          <h2 style={{ marginTop: 0 }}>Eligibility Checker</h2>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            style={inputStyle}
          />
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            type="number"
            style={inputStyle}
          />
          <input
            name="occupation"
            value={form.occupation}
            onChange={handleChange}
            placeholder="Occupation (student / farmer / job seeker)"
            style={inputStyle}
          />
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            name="need"
            value={form.need}
            onChange={handleChange}
            placeholder="Need (education / pension / housing / health)"
            style={inputStyle}
          />

          <button
            onClick={() => setSubmitted(true)}
            style={{
              width: "100%",
              background: "#1565c0",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: "14px",
              cursor: "pointer",
              fontWeight: 800,
              marginTop: 8
            }}
          >
            <FaFilter style={{ marginRight: 8 }} />
            Check My Schemes
          </button>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.82)",
            borderRadius: "22px",
            padding: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}
        >
          <h2 style={{ marginTop: 0 }}>Recommended Schemes</h2>

          {!submitted && (
            <p style={{ color: "#64748b" }}>
              Fill the form and click <b>Check My Schemes</b>.
            </p>
          )}

          {submitted && recommendations.length === 0 && (
            <p style={{ color: "#dc2626" }}>
              No direct match found. Try a broader need like education, health, pension, or housing.
            </p>
          )}

          {submitted &&
            recommendations.map((scheme) => (
              <div
                key={scheme.id}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "18px",
                  marginBottom: "14px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
                }}
              >
                <h3 style={{ marginTop: 0 }}>{scheme.name}</h3>
                <p style={{ color: "#475569" }}>{scheme.description}</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button
                    onClick={() => window.open(scheme.officialUrl, "_blank")}
                    style={actionBtn}
                  >
                    <FaExternalLinkAlt />
                    Apply / Official Link
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginBottom: "12px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: "15px"
};

const actionBtn = {
  background: "#16a34a",
  color: "#fff",
  border: "none",
  padding: "10px 14px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: 700,
  display: "flex",
  gap: 8,
  alignItems: "center"
};

export default Eligibility;