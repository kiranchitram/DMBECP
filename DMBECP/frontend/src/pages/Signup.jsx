import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/App.css";

function Signup() {
  const [form, setForm] = useState({ name:"", username:"", email:"", password:"", phone:"" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Signup</h2>
      <div className="form-container">
        <form className="form-card" onSubmit={handleSubmit}>
          <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} />
          <input placeholder="Username" onChange={(e)=>setForm({...form,username:e.target.value})} />
          <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} />
          <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})} />
          <input placeholder="Phone" onChange={(e)=>setForm({...form,phone:e.target.value})} />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
