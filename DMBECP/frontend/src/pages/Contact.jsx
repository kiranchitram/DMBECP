import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/App.css";

function Contactttt() {
  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Contact Us</h2>
      <div className="form-container">
        <form className="form-card">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
