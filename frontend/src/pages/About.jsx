function About() {
  return (
    <div className="section">
      <div className="card">
        <h1>About ObesityCare AI</h1>

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

          <h2>About Author</h2>
          <p style={{ marginTop: "15px" }}>
            Hello, I’m Muvva Sai Bharath, a final-year B.Tech engineering student with a strong interest in artificial intelligence, machine learning, and full-stack web development. I enjoy building practical technology solutions that combine data science with modern web applications. My work focuses on developing intelligent systems that can analyze real-world data and provide meaningful insights. One of my projects, ObesityCare AI, is designed to help analyze lifestyle factors and predict obesity risk using health-related inputs such as BMI, activity level, diet, sleep, and hydration. Through projects like this, I aim to apply machine learning concepts to solve real-world health and technology challenges while continuously improving my skills in software development, data analysis, and AI-driven solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;