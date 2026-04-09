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

      {/* announcement bar */}
      <div style={styles.announcementBar}>
        <FaBullhorn style={{ marginRight: 10 }} />

        <div style={styles.scrollBox}>
          Welcome to Tamil Nadu AI Scheme Assistant • Discover schemes • Check eligibility • Open official links directly • Explore citizen services
        </div>

      </div>

      {/* hero section */}
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
              <p>
                Tourism, education, women welfare, farming support, pensions and citizen services.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.infoPanel}>
          <h2>Citizen Quick Access</h2>

          <div style={styles.statsGrid}>

            <div style={styles.statCard}>
              <FaLandmark style={styles.statIcon}/>
              <h3>50+</h3>
              <p>Scheme entries</p>
            </div>

            <div style={styles.statCard}>
              <FaMapMarkedAlt style={styles.statIcon}/>
              <h3>TN + Central</h3>
              <p>Official links</p>
            </div>

            <div style={styles.statCard}>
              <FaGraduationCap style={styles.statIcon}/>
              <h3>Students</h3>
              <p>Education support</p>
            </div>

            <div style={styles.statCard}>
              <FaHeartbeat style={styles.statIcon}/>
              <h3>Citizens</h3>
              <p>Health welfare</p>
            </div>

          </div>
        </div>
      </div>

      {/* cards */}
      <div style={styles.cardsGrid}>
        {quickCards.map((item,index)=>(
          <div key={index} style={styles.featureCard}>
            <div style={styles.featureIcon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* bottom section */}
      <div style={styles.bottomGrid}>

        <div style={styles.panel}>
          <h2>Featured Schemes</h2>

          {featuredSchemes.map((scheme,index)=>(
            <div key={index} style={styles.listRow}>
              {scheme}
              <FaArrowRight/>
            </div>
          ))}

        </div>

        <div style={styles.panel}>
          <h2>Portal Highlights</h2>

          <p>
            This assistant helps citizens discover Tamil Nadu schemes
            using AI recommendation and eligibility filtering.
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

scrollBox:{
overflow:"hidden",
whiteSpace:"nowrap",
display:"block",
animation:"scroll 12s linear infinite"
},

page:{
padding:"24px"
},

announcementBar:{
display:"flex",
alignItems:"center",
background:"linear-gradient(90deg,#ff9933,#fff,#138808)",
padding:"12px",
borderRadius:"12px",
marginBottom:"20px",
fontWeight:"bold"
},

heroGrid:{
display:"grid",
gridTemplateColumns:"1.3fr 1fr",
gap:"20px"
},

sliderCard:{
background:"#fff",
padding:"10px",
borderRadius:"12px"
},

sliderWrapper:{
position:"relative"
},

sliderImage:{
width:"100%",
height:"300px",
objectFit:"cover",
borderRadius:"10px"
},

sliderOverlay:{
position:"absolute",
bottom:"0",
left:"0",
right:"0",
padding:"10px",
color:"white",
background:"rgba(0,0,0,0.5)"
},

infoPanel:{
background:"#fff",
padding:"20px",
borderRadius:"12px"
},

statsGrid:{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"10px"
},

statCard:{
background:"#f8fafc",
padding:"15px",
textAlign:"center",
borderRadius:"10px"
},

statIcon:{
fontSize:"24px"
},

cardsGrid:{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"15px",
marginTop:"20px"
},

featureCard:{
background:"#fff",
padding:"20px",
borderRadius:"12px"
},

featureIcon:{
fontSize:"25px"
},

bottomGrid:{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"20px",
marginTop:"20px"
},

panel:{
background:"#fff",
padding:"20px",
borderRadius:"12px"
},

listRow:{
display:"flex",
justifyContent:"space-between",
padding:"10px 0"
},

ribbonBox:{
display:"flex",
marginTop:"15px"
},

ribbonOrange:{
background:"#ff9933",
padding:"10px",
flex:1
},

ribbonWhite:{
background:"#fff",
padding:"10px",
flex:1
},

ribbonGreen:{
background:"#138808",
color:"#fff",
padding:"10px",
flex:1
}

};

export default Home;
