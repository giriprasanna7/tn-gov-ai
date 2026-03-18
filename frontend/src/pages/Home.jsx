import React, { useEffect, useState } from "react";
import {
  FaBullhorn,
  FaLandmark,
  FaMapMarkedAlt,
  FaGraduationCap,
  FaHeartbeat,
  FaTractor,
  FaFemale,
  FaArrowRight
} from "react-icons/fa";

function Home() {
  const sliderImages = [
    "/images/tourism1.jpeg",
    "/images/tourism2.jpeg",
    "/images/tourism3.jpeg",
    "/images/tourism4.jpeg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const quickCards = [
    {
      title: "Education Support",
      icon: <FaGraduationCap />,
      text: "Scholarships, laptop support, student welfare, bus pass and higher education schemes."
    },
    {
      title: "Women Welfare",
      icon: <FaFemale />,
      text: "Financial assistance, social welfare support and women-focused Tamil Nadu schemes."
    },
    {
      title: "Farmer Benefits",
      icon: <FaTractor />,
      text: "Farmer subsidy, crop insurance, irrigation, equipment and rural livelihood support."
    },
    {
      title: "Health & Pension",
      icon: <FaHeartbeat />,
      text: "Health protection, maternity support, senior citizen pension and disability assistance."
    }
  ];

  const featuredSchemes = [
    "Pudhumai Penn Scheme",
    "Tamil Pudhalvan Scheme",
    "Free Laptop Scheme",
    "PM-KISAN",
    "Senior Citizen Pension Scheme",
    "Kalaignar Magalir Urimai Thogai"
  ];

  return (
    <div style={styles.page}>
      <div style={styles.announcementBar}>
        <FaBullhorn style={{ marginRight: 10 }} />
        <marquee>
          Welcome to Tamil Nadu AI Scheme Assistant • Discover schemes • Check eligibility • Open official links directly • Explore citizen services
        </marquee>
      </div>

      <div style={styles.heroGrid}>
        <div style={styles.sliderCard}>
          <div style={styles.sliderWrapper}>
            <img
              src={sliderImages[current]}
              alt="Tamil Nadu highlights"
              style={styles.sliderImage}
            />
            <div style={styles.sliderOverlay}>
              <h2 style={{ margin: 0 }}>Explore Tamil Nadu Services</h2>
              <p style={{ marginTop: 8 }}>
                Tourism, education, women welfare, farming support, pensions and citizen services.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.infoPanel}>
          <h2 style={styles.sectionTitle}>Citizen Quick Access</h2>

          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <FaLandmark style={styles.statIcon} />
              <h3>50+</h3>
              <p>Scheme entries</p>
            </div>

            <div style={styles.statCard}>
              <FaMapMarkedAlt style={styles.statIcon} />
              <h3>TN + Central</h3>
              <p>Official links</p>
            </div>

            <div style={styles.statCard}>
              <FaGraduationCap style={styles.statIcon} />
              <h3>Students</h3>
              <p>Education support</p>
            </div>

            <div style={styles.statCard}>
              <FaHeartbeat style={styles.statIcon} />
              <h3>Citizens</h3>
              <p>Health & welfare</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.cardsGrid}>
        {quickCards.map((item, index) => (
          <div key={index} style={styles.featureCard}>
            <div style={styles.featureIcon}>{item.icon}</div>
            <h3 style={{ marginBottom: 10 }}>{item.title}</h3>
            <p style={styles.featureText}>{item.text}</p>
          </div>
        ))}
      </div>

      <div style={styles.bottomGrid}>
        <div style={styles.panel}>
          <h2 style={styles.sectionTitle}>Featured Schemes</h2>
          {featuredSchemes.map((scheme, index) => (
            <div key={index} style={styles.listRow}>
              <span>{scheme}</span>
              <FaArrowRight color="#1565c0" />
            </div>
          ))}
        </div>

        <div style={styles.panel}>
          <h2 style={styles.sectionTitle}>Portal Highlights</h2>
          <p style={styles.panelText}>
            This assistant helps citizens discover suitable Tamil Nadu and Indian government schemes
            using AI recommendations, eligibility filtering, and direct official links.
          </p>
          <p style={styles.panelText}>
            Use the sidebar to open <b>AI Chat</b>, <b>Eligibility</b>, or <b>Schemes</b> and
            continue your search through a cleaner and more interactive citizen experience.
          </p>
          <div style={styles.ribbonBox}>
            <span style={styles.ribbonOrange}>Tamil Nadu Welfare</span>
            <span style={styles.ribbonWhite}>Citizen Support</span>
            <span style={styles.ribbonGreen}>Official Access</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "calc(100vh - 74px)",
    padding: "24px",
    background: "linear-gradient(135deg, #ffedd5 0%, #ffffff 45%, #dcfce7 100%)"
  },

  announcementBar: {
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(90deg, #ff9933 0%, #ffffff 50%, #138808 100%)",
    padding: "12px 18px",
    borderRadius: "18px",
    boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "22px"
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "20px",
    marginBottom: "22px"
  },

  sliderCard: {
    background: "rgba(255,255,255,0.82)",
    borderRadius: "24px",
    padding: "16px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.08)"
  },

  sliderWrapper: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "18px",
    height: "330px"
  },

  sliderImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 0.5s ease"
  },

  sliderOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "20px",
    color: "white",
    background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15), transparent)"
  },

  infoPanel: {
    background: "rgba(255,255,255,0.82)",
    borderRadius: "24px",
    padding: "22px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.08)"
  },

  sectionTitle: {
    marginTop: 0,
    marginBottom: 18,
    color: "#0f172a"
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px"
  },

  statCard: {
    background: "#ffffff",
    borderRadius: "18px",
    padding: "18px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
  },

  statIcon: {
    fontSize: "26px",
    color: "#1565c0",
    marginBottom: 10
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginBottom: "22px"
  },

  featureCard: {
    background: "rgba(255,255,255,0.9)",
    borderRadius: "20px",
    padding: "22px",
    boxShadow: "0 10px 24px rgba(0,0,0,0.07)",
    transition: "transform 0.2s ease"
  },

  featureIcon: {
    fontSize: "28px",
    color: "#1565c0",
    marginBottom: 12
  },

  featureText: {
    color: "#475569",
    lineHeight: 1.6,
    margin: 0
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },

  panel: {
    background: "rgba(255,255,255,0.88)",
    borderRadius: "22px",
    padding: "22px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.08)"
  },

  listRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 0",
    borderBottom: "1px solid #e2e8f0",
    fontWeight: 600,
    color: "#1e293b"
  },

  panelText: {
    color: "#475569",
    lineHeight: 1.7
  },

  ribbonBox: {
    display: "flex",
    marginTop: "18px",
    borderRadius: "14px",
    overflow: "hidden",
    fontWeight: 800
  },

  ribbonOrange: {
    flex: 1,
    background: "#ff9933",
    color: "#111827",
    padding: "12px",
    textAlign: "center"
  },

  ribbonWhite: {
    flex: 1,
    background: "#ffffff",
    color: "#111827",
    padding: "12px",
    textAlign: "center",
    borderTop: "1px solid #e5e7eb",
    borderBottom: "1px solid #e5e7eb"
  },

  ribbonGreen: {
    flex: 1,
    background: "#138808",
    color: "#ffffff",
    padding: "12px",
    textAlign: "center"
  }
};

export default Home;