import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

function calculateRisk(data){

const weight = parseFloat(data.weight)
const height = parseFloat(data.height)

const bmi = weight / ((height/100)*(height/100))

let score = 0

// BMI influence
if(bmi < 18.5) score += 1
else if(bmi < 25) score += 2
else if(bmi < 30) score += 3
else score += 4

// Diet impact
if(data.diet === "poor") score += 3
else if(data.diet === "average") score += 2
else score += 1

// Activity impact
if(data.activity === "low") score += 3
else if(data.activity === "moderate") score += 2
else score += 1

// Sleep impact
if(data.sleep < 6) score += 3
else if(data.sleep < 8) score += 2
else score += 1

// Water intake
if(data.water < 2) score += 3
else if(data.water < 3) score += 2
else score += 1


let predictedClass
let riskLevel
let dietPlan
let confidence

// Risk classification
function calculateRisk(data) {

  const weight = Number(data.weight);
  const height = Number(data.height) / 100;

  const bmi = weight / (height * height);

  let predictedClass;
  let riskLevel;
  let confidence;
  let dietPlan;

  if (bmi < 18.5) {
    predictedClass = "Underweight";
    riskLevel = "Low";
    confidence = 0.85;
    dietPlan = "Increase calorie intake and maintain balanced nutrition.";
  }

  else if (bmi < 25) {
    predictedClass = "Normal Weight";
    riskLevel = "Low";
    confidence = 0.90;
    dietPlan = "Maintain balanced diet and regular physical activity.";
  }

  else if (bmi < 30) {
    predictedClass = "Overweight";
    riskLevel = "Average";
    confidence = 0.88;
    dietPlan = "Reduce sugar and fast food consumption. Increase fiber intake and moderate exercise.";
  }

  else {
    predictedClass = "Obese";
    riskLevel = "High";
    confidence = 0.93;
    dietPlan = "Follow calorie deficit diet, increase physical activity, and consult healthcare professional.";
  }

  return {
    bmi: bmi.toFixed(2),
    predictedClass,
    confidence,
    riskLevel,
    dietPlan
  };

}
}


app.post("/predict", (req, res) => {
  const result = calculateRisk(req.body);
  res.json(result);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
