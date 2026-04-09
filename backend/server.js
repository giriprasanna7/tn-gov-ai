const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* test route */
app.get("/", (req, res) => {
    res.send("TN GOV AI Backend Running Successfully");
});

/* recommendation API */
app.post("/recommend", (req, res) => {

    const { name, age, occupation, gender, scheme } = req.body;

    let recommendation = "";

    if (occupation.toLowerCase().includes("farmer")) {
        recommendation = "Recommended: Tamil Nadu Farmer Subsidy Scheme";
    }

    else if (gender.toLowerCase() === "female") {
        recommendation = "Recommended: Moovalur Ramamirtham Marriage Scheme";
    }

    else if (age > 60) {
        recommendation = "Recommended: Senior Citizen Pension Scheme";
    }

    else if (scheme.toLowerCase().includes("education")) {
        recommendation = "Recommended: Tamil Nadu Scholarship Scheme";
    }

    else {
        recommendation = "You can explore general Tamil Nadu welfare schemes.";
    }

    res.json({
        reply: recommendation
    });

});

/* start server */
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
