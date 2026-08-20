import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/admin");
    } else {
      navigate("/customer");
    }
  };

  return (
    <>
      <Navbar />
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Login</h2>
      <div className="form-container">
        <form className="form-card" onSubmit={handleLogin}>
          <input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
