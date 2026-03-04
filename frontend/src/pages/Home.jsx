import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero">
        <div>
          <h1>AI Powered Obesity Risk Assessment</h1>
          <p>
            A modern health-tech platform that evaluates lifestyle,
            body metrics, and behavioral factors to determine obesity
            risk levels and provide preventive dietary guidance.
          </p>
          <button onClick={() => navigate("/predict")}>
            Start Assessment
          </button>
        </div>
      </div>

      <div className="section">
        <h2>Why Obesity Prevention Matters</h2>
        <p>
          Obesity significantly increases the risk of cardiovascular disease,
          diabetes, hypertension, and metabolic disorders. Early intervention
          through lifestyle modification remains the most effective solution.
        </p>
        <p>
          Our system integrates BMI evaluation with behavioral risk analysis,
          helping individuals understand their health position clearly.
        </p>
      </div>
    </>
  );
}

export default Home;