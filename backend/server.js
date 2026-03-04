import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

function calculateRisk(data){

const {weight,height,activity,diet,sleep,water} = data;

const heightMeters = height/100;
const bmi = weight/(heightMeters*heightMeters);

let score = 0;

// BMI effect
if(bmi < 18.5) score += 1;
else if(bmi < 25) score += 2;
else if(bmi < 30) score += 4;
else score += 6;

// activity
if(activity === "low") score += 3;
if(activity === "moderate") score += 2;
if(activity === "high") score += 0;

// diet
if(diet === "poor") score += 4;
if(diet === "average") score += 2;
if(diet === "good") score += 0;

// sleep
if(sleep < 6) score += 3;
else if(sleep < 8) score += 1;

// water
if(water < 1.5) score += 3;
else if(water < 3) score += 1;

let riskLevel;
let dietPlan;

if(score <= 5){
riskLevel="LOW";
dietPlan="Maintain balanced diet rich in vegetables, lean protein, and daily physical activity.";
}
else if(score <= 10){
riskLevel="AVERAGE";
dietPlan="Reduce sugar and fast food consumption. Increase fiber intake and maintain moderate exercise.";
}
else{
riskLevel="HIGH";
dietPlan="Adopt calorie controlled diet, increase physical activity, and consult healthcare professionals.";
}

return{
bmi:bmi.toFixed(2),
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