import { useState } from "react";
import { useNavigate } from "react-router-dom";
const language = localStorage.getItem("language");

function Symptoms() {
  const navigate = useNavigate();

  const [symptoms, setSymptoms] = useState("");

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#eef5fb",
      }}
    >

      <div
        style={{
          background: "white",
          width: "600px",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,.15)",
        }}
      >

        <h2>🩺 Describe Your Symptoms</h2>

        <p
            style={{
              color: "#1565C0",
              fontWeight: "bold",
              marginBottom: "15px"
            }}
          >
            Selected Language: {language}
        </p>


        <br />

        <textarea

          rows="7"

          value={symptoms}

          onChange={(e)=>setSymptoms(e.target.value)}

          placeholder="Example: Fever, headache, cough..."

          style={{

            width:"100%",

            padding:"15px",

            fontSize:"16px",

            borderRadius:"10px"

          }}

        />

        <br /><br />

        <button
          onClick={() => {
            if (!symptoms.trim()) {
              alert("Please enter at least one symptom.");
              return;
            }
            localStorage.setItem("symptoms", symptoms);
            navigate("/result");
          }}
        >
          🤖 Analyze Symptoms
        </button>

      </div>

    </div>

  );

}

export default Symptoms;