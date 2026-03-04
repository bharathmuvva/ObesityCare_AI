function About() {
  return (
    <div className="section">
      <div className="card">
        <h2>About ObesityCare AI</h2>

        <div style={{ marginTop: "25px", lineHeight: "1.9" }}>
          <p>
            ObesityCare AI is a full-stack health technology platform designed
            to assess obesity risk using structured body metrics and lifestyle
            indicators.
          </p>

          <p style={{ marginTop: "15px" }}>
            The system classifies individuals into three risk categories:
            <strong> Low Risk, Average Risk, and High Risk</strong>.
          </p>

          <p style={{ marginTop: "15px" }}>
            Based on the evaluated risk level, personalized dietary guidance
            and preventive recommendations are generated to support healthier
            living.
          </p>

          <p style={{ marginTop: "15px" }}>
            This application demonstrates integration of React frontend and
            Node.js backend to simulate a scalable health monitoring system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;