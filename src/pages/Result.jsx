//import "./Result.css";
function Result() {
  const symptoms = localStorage.getItem("symptoms")?.toLowerCase() || "";
  let disease = "General Health Issue";
  let firstAid = [
    "Drink plenty of water",
    "Take proper rest",
    "Consult a doctor if symptoms persist"
  ];
  let warning = "Visit the nearest healthcare center if symptoms worsen.";

  if (symptoms.includes("fever")) {
    disease = "Possible Viral Fever";
    firstAid = [
      "Drink plenty of fluids",
      "Take adequate rest",
      "Monitor your body temperature"
    ];
    warning = "If fever lasts more than 3 days, consult a doctor immediately.";
  }

  else if (symptoms.includes("cough")) {
    disease = "Possible Common Cold";
    firstAid = [
      "Drink warm water",
      "Avoid cold foods",
      "Take enough rest"
    ];
    warning = "Seek medical help if breathing becomes difficult.";
  }

  else if (symptoms.includes("headache")) {
    disease = "Possible Migraine or Stress Headache";
    firstAid = [
      "Rest in a quiet room",
      "Stay hydrated",
      "Avoid bright lights"
    ];
    warning = "Consult a doctor if the headache is severe or persistent.";
  }
  return (
    <div className="result-container">
      <div className="result-card">

        <h1>🤖 GramSathi AI Health Report</h1>
        <h3>📝 Your Symptoms</h3>
        <p>{symptoms}</p>

        <h3>🩺 Preliminary Assessment</h3>
        <p>{disease}</p>

        <h3>🩹 First Aid</h3>

       <ul>
          {firstAid.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
       </ul>

        <h3>⚠️ Warning</h3>

        <p>{warning}</p>

        <button
          onClick={() =>
            window.open(
              "https://www.google.com/maps/search/nearby+hospitals",
              "_blank"
            )
          }
        >
          📍 Find Nearby Hospitals
        </button>

        <button
          style={{
            background: "red",
            color: "white",
            padding: "15px",
            width: "300px",
            marginTop: "15px auto",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
            
          }}
          onClick={() => alert("🚨 Emergency! Call 108 immediately.")}
        >
          🚨 Emergency SOS
        </button>

        <hr />

        <p
          style={{
            color: "#d32f2f",
            marginTop: "20px",
            fontSize: "15px",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          ⚠️ Disclaimer: This is an AI-assisted prototype developed for educational and demonstration purposes only. It is not a substitute for professional medical advice. Please consult a qualified healthcare professional before making any medical decisions.
        </p>

      </div>
    </div>
  );
}

export default Result;