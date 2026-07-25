import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">

      <div className="overlay">

        <h1>DustNet AI</h1>

        <h2>
          Autonomous Smart Road Cleaning &
          <br />
          Monitoring Platform
        </h2>

        <p>
          AI Powered • IoT Enabled • Real-Time Monitoring • Autonomous Rover
        </p>

        <div className="buttons">
          <Link to="/login">
            <button>Get Started</button>
          </Link>

          <button className="secondary">
            Learn More
          </button>
        </div>

      </div>

    </div>
  );
}