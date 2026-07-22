import { useNavigate } from "react-router-dom";
function Language() {
  const navigate = useNavigate();
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
          padding: "40px",
          borderRadius: "15px",
          width: "450px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ marginBottom: "30px", color: "#1565C0" }}>
          🌍 Choose Your Language
        </h2>

        <br />

        <button
          className="lang-btn"
          onClick={() => {
            localStorage.setItem("language", "English");
            navigate("/symptoms");
          }}
        >
          English
        </button>

        <br /><br />

        <button
          className="lang-btn"
          onClick={() => {
            localStorage.setItem("language", "Telugu");
            navigate("/symptoms");
          }}
        >
          తెలుగు
        </button>
        <br /><br />

        <button
          className="lang-btn"
          onClick={() => {
            localStorage.setItem("language", "Hindi");
            navigate("/symptoms");
          }}
        >
          हिन्दी
        </button>
      </div>
    </div>
  );
}

export default Language;