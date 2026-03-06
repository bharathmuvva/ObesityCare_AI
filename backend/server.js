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

/* BMI Calculation */

const bmi = weight / (height * height);

let predictedClass;
let riskLevel;
let confidence;

/* BMI Classification */

if(bmi < 18.5){
predictedClass = "Underweight";
riskLevel = "Low";
confidence = 0.75;
}
else if(bmi < 25){
predictedClass = "Normal";
riskLevel = "Low";
confidence = 0.85;
}
else if(bmi < 30){
predictedClass = "Overweight";
riskLevel = "Moderate";
confidence = 0.80;
}
else{
predictedClass = "Obese";
riskLevel = "High";
confidence = 0.90;
}

/* Diet Recommendation */

let recommendedDiet = [];

if(predictedClass === "Underweight"){
recommendedDiet.push("Increase calorie intake");
recommendedDiet.push("Eat more protein rich foods");
recommendedDiet.push("Include nuts and dairy products");
}

if(predictedClass === "Normal"){
recommendedDiet.push("Maintain balanced diet");
recommendedDiet.push("Continue regular physical activity");
}

if(predictedClass === "Overweight"){
recommendedDiet.push("Reduce carbohydrate intake");
recommendedDiet.push("Increase vegetables and fruits");
recommendedDiet.push("Exercise at least 30 minutes daily");
}

if(predictedClass === "Obese"){
recommendedDiet.push("Follow calorie deficit diet");
recommendedDiet.push("Avoid sugary drinks");
recommendedDiet.push("Daily cardio exercise recommended");
}

return {

bmi: bmi.toFixed(2),
predictedClass,
confidence,
riskLevel,
recommendedDiet

};

}

/* Prediction API */

app.post("/predict",(req,res)=>{

const data = req.body;

const result = calculatePrediction(data);

res.json(result);

});

/* Root route */

app.get("/",(req,res)=>{
res.send("ObesityCare AI Backend Running");
});

/* Port */

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log("Server running on port",PORT);
});
