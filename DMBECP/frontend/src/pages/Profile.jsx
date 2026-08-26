import Navbar from "../components/Navbar";
import "../styles/App.css";

function Profile() {
  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Update Profile</h2>
      <div className="form-container">
        <form className="form-card">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
