import "../styles/Home.css";
import heroImage from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">

      <div className="hero-left">

        <h1>GramSathi AI</h1>

        <h2>AI-Powered Rural Healthcare Assistant</h2>

        <p>
          Helping every rural citizen access healthcare in their own
          language using AI.
        </p>

        <div className="features">

          <p>🩺 Voice-based Symptom Analysis</p>

          <p>📍 Nearby Hospital Locator</p>

          <p>🚑 Emergency SOS</p>

          <p>🌍 Regional Language Support</p>


        </div>

        <button onClick={() => navigate("/language")}>
          🚀 Start Health Check
        </button>

      </div>

      <div className="hero-right">

        <img src={heroImage} alt="Healthcare"/>

      </div>

    </section>
  );
}

export default Hero;