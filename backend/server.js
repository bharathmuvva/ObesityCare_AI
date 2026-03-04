import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

function calculateRisk(data) {
  const { weight, height, activity, diet, sleep, water } = data;

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let score = 0;

  if (bmi < 18.5) score += 1;
  else if (bmi < 25) score += 2;
  else if (bmi < 30) score += 4;
  else score += 6;

  if (activity === "low") score += 3;
  if (activity === "moderate") score += 2;

  if (diet === "poor") score += 3;
  if (diet === "average") score += 2;

  if (sleep < 6) score += 2;
  if (water < 2) score += 2;

  let riskLevel;
  let dietPlan;

  if (score <= 5) {
    riskLevel = "LOW";
    dietPlan = "Maintain balanced diet with vegetables, fruits, and regular exercise.";
  } else if (score <= 10) {
    riskLevel = "AVERAGE";
    dietPlan = "Reduce sugar, increase fiber, moderate calorie deficit, daily activity.";
  } else {
    riskLevel = "HIGH";
    dietPlan = "Strict low calorie diet, high protein, avoid processed food, consult doctor.";
  }

  return { bmi: bmi.toFixed(2), riskLevel, dietPlan };
}

app.post("/predict", (req, res) => {
  const result = calculateRisk(req.body);
  res.json(result);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});