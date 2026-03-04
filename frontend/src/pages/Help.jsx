function Help() {
  return (
    <div className="section">
      <div className="card">
        <h2>How to Use the Risk Predictor</h2>

        <div style={{ marginTop: "25px", lineHeight: "1.9" }}>
          <p><strong>Step 1:</strong> Enter your weight in kilograms.</p>

          <p style={{ marginTop: "12px" }}>
            <strong>Step 2:</strong> Enter your height in centimeters.
          </p>

          <p style={{ marginTop: "12px" }}>
            <strong>Step 3:</strong> Select your physical activity level.
          </p>

          <p style={{ marginTop: "12px" }}>
            <strong>Step 4:</strong> Select your diet quality.
          </p>

          <p style={{ marginTop: "12px" }}>
            <strong>Step 5:</strong> Enter your average daily sleep duration.
          </p>

          <p style={{ marginTop: "12px" }}>
            <strong>Step 6:</strong> Enter your daily water intake.
          </p>

          <p style={{ marginTop: "20px" }}>
            Click <strong>Predict</strong> to receive your BMI,
            risk classification, and dietary recommendation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
