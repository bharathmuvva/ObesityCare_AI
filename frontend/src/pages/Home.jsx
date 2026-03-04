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

      
    </>
  );
}

export default Home;