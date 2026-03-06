import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

function calculatePrediction(data){

const height = parseFloat(data.height);
const weight = parseFloat(data.weight);
const water = parseFloat(data.water);
const sleep = parseFloat(data.sleep);
const activity = parseFloat(data.activity);
const junkFood = parseFloat(data.junkFood);
const vegetables = parseFloat(data.vegetables);

/* -----------------------
   BMI Calculation
------------------------*/

const bmi = weight / (height * height);

let bmiStatus;
let bmiSymbol;
let bmiColor;

if(bmi < 18.5){
bmiStatus = "Underweight";
bmiSymbol = "🔵";
bmiColor = "blue";
}
else if(bmi < 25){
bmiStatus = "Normal";
bmiSymbol = "🟢";
bmiColor = "green";
}
else if(bmi < 30){
bmiStatus = "Overweight";
bmiSymbol = "🟠";
bmiColor = "orange";
}
else{
bmiStatus = "Obese";
bmiSymbol = "🔴";
bmiColor = "red";
}

/* -----------------------
   Lifestyle Risk Scoring
------------------------*/

let score = 0;

/* BMI weight */
score += bmi * 1.4;

/* Activity influence */

if(activity === 0) score += 12;
else if(activity === 1) score += 8;
else if(activity === 2) score += 4;

/* Sleep influence */

if(sleep < 5) score += 10;
else if(sleep < 6) score += 6;
else if(sleep < 7) score += 3;

/* Water influence */

if(water < 1.5) score += 7;
else if(water < 2) score += 4;

/* Junk food influence */

if(junkFood >= 4) score += 10;
else if(junkFood >= 3) score += 6;
else if(junkFood >= 2) score += 3;

/* Vegetables reduce risk */

if(vegetables >= 4) score -= 6;
else if(vegetables >= 3) score -= 4;

/* -----------------------
   Risk Classification
------------------------*/

let risk;
let riskSymbol;
let riskColor;

if(score < 25){
risk = "Low Risk";
riskSymbol = "🟢";
riskColor = "green";
}
else if(score < 40){
risk = "Moderate Risk";
riskSymbol = "🟠";
riskColor = "orange";
}
else{
risk = "High Risk";
riskSymbol = "🔴";
riskColor = "red";
}

/* -----------------------
   Diet Recommendation
------------------------*/

let recommendations = [];

/* BMI specific */

if(bmiStatus === "Underweight"){
recommendations.push("Increase calorie intake");
recommendations.push("Add healthy fats like nuts and peanut butter");
recommendations.push("Increase protein consumption");
}

if(bmiStatus === "Overweight"){
recommendations.push("Reduce refined carbohydrates");
recommendations.push("Increase fiber rich foods");
recommendations.push("Perform 30 minutes daily exercise");
}

if(bmiStatus === "Obese"){
recommendations.push("Follow calorie deficit diet");
recommendations.push("Daily cardio exercise recommended");
recommendations.push("Avoid sugary beverages");
}

/* Lifestyle corrections */

if(water < 2){
recommendations.push("Increase daily water intake to at least 2–3 liters");
}

if(sleep < 7){
recommendations.push("Maintain 7–8 hours of sleep for metabolic balance");
}

if(activity < 2){
recommendations.push("Increase physical activity such as walking or cycling");
}

if(junkFood > 3){
recommendations.push("Reduce fast food consumption");
}

if(vegetables < 2){
recommendations.push("Include vegetables in daily meals");
}

/* Remove duplicates */

recommendations = [...new Set(recommendations)];

return{
bmi: bmi.toFixed(2),
bmiStatus,
bmiSymbol,
bmiColor,
risk,
riskSymbol,
riskColor,
score: score.toFixed(2),
recommendations
}

}




app.post("/predict",(req,res)=>{

const data = req.body;

const result = calculatePrediction(data);

res.json(result);

})