import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/App.css";

function Help() {
  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Help & Support</h2>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Need assistance? Browse FAQs or contact our support team.
      </p>
      <Footer />
    </div>
  );
}

export default Help;
