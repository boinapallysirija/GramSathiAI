import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          color: "#666",
          marginTop: "30px",
          borderTop: "1px solid #ddd",
          fontSize: "14px",
        }}
      >
        © 2026 GramSathi AI | AI-Powered Rural Healthcare Assistant
      </footer>
    </div>
  );
}

export default Home;