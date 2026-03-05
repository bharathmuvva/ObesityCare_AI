import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

function calculateRisk(data) {

  const weight = Number(data.weight);
  const height = Number(data.height) / 100;

  const bmi = weight / (height * height);

  let predictedClass;
  let riskLevel;
  let confidence;
  let dietPlan;

  // Base classification using BMI
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

  // Lifestyle adjustment scoring
  let score = 0;

  if (data.diet === "poor") score += 2;
  if (data.activity === "low") score += 2;
  if (Number(data.sleep) < 6) score += 1;
  if (Number(data.water) < 2) score += 1;

  // Slightly adjust risk if lifestyle is bad
  if (score >= 3 && predictedClass === "Normal Weight") {
    riskLevel = "Average";
  }

  if (score >= 4 && predictedClass === "Overweight") {
    riskLevel = "High";
  }

  return {
    bmi: bmi.toFixed(2),
    predictedClass,
    confidence,
    riskLevel,
    dietPlan
  };
}



app.post("/predict", (req, res) => {
  const result = calculateRisk(req.body);
  res.json(result);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
