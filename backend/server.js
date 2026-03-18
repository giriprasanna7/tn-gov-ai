const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/recommend", (req, res) => {

    const { name, age, occupation, gender, scheme } = req.body;

    let recommendation = "";

    if (occupation.toLowerCase().includes("farmer")) {
        recommendation = "Recommended: Tamil Nadu Farmer Subsidy Scheme";
    }

    else if (gender === "female") {
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

app.listen(5000, () => {
    console.log("Server running on port 5000");
});