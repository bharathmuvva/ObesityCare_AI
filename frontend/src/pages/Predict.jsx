import { useState } from "react";
import axios from "axios";

function Predict() {
  const [form, setForm] = useState({
    weight: "",
    height: "",
    activity: "moderate",
    diet: "average",
    sleep: "",
    water: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const res = await axios.post("https://obesitycare-ai.onrender.com/predict", form);
    setResult(res.data);}
    catch(error){console.log(error)}
  };

  return (
    <div className="section">
      <div className="card">
        <h2>Obesity Risk Predictor</h2>

        <form onSubmit={handleSubmit}>
          <input type="number" name="weight" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} required />
          <input type="number" name="height" placeholder="Height (cm)" value={form.height} onChange={handleChange} required />

          <select name="activity" value={form.activity} onChange={handleChange}>
            <option value="low">Low Activity</option>
            <option value="moderate">Moderate Activity</option>
            <option value="high">High Activity</option>
          </select>

          <select name="diet" value={form.diet} onChange={handleChange}>
            <option value="poor">Poor Diet</option>
            <option value="average">Average Diet</option>
            <option value="good">Good Diet</option>
          </select>

          <input type="number" name="sleep" placeholder="Sleep (hours)" value={form.sleep} onChange={handleChange} required />
          <input type="number" name="water" placeholder="Water Intake (liters)" value={form.water} onChange={handleChange} required />

          <button className="primary" type="submit">
            Predict
          </button>
         
        </form>

        {result && (
          <div className={`result ${result.riskLevel.toLowerCase()}`}>
            <p><strong>BMI:</strong> {result.bmi}</p>
            <p><strong>Risk Level:</strong> {result.riskLevel}</p>
            <p><strong>Suggested Diet:</strong> {result.dietPlan}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Predict;