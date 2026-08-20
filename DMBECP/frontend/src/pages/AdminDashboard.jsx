import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Dashboard.css";
import Footer from "../components/Footer";

function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showViewUsers, setShowViewUsers] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

  const [users, setUsers] = useState([
	{ username: "user1", email: "user1@gmail.com", phone: "7234567890", address: "Hyderabad-500038", password: "........" },
	{ username: "alice", email: "alice@gmail.com", phone: "9876543210", address: "Delhi", password: "........" },
	{ username: "seconduser10", email: "seconduser@gmail.com", phone: "6367890956", address: "Banglore", password: "........" },
	 { username: "juliet20", email: "juliet@gmail.com", phone: "8876548344", address: "Mumbai", password: "........" }
  ]);

  const [newUser, setNewUser] = useState({ username: "", email: "", phone: "", address: "", password: "" });

  // Filter users by search term
  const filteredUsers = users.filter(
    (u) =>
      u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
	  u.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
	  u.password.toLowerCase().includes(searchTerm.toLowerCase()) ||
	  u.phone.includes(searchTerm)
  );

  // Add user
  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ username: "", email: "", phone: "", address: "", password: "" });
    setShowAddForm(false);
    setShowViewUsers(true);
  };

  // Delete user
  const handleDelete = (index) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
  };

  // Update user
  const handleUpdate = (index) => {
    const updated = [...users];
    updated[index].username = prompt("Enter new username:", updated[index].username) || updated[index].username;
    updated[index].email = prompt("Enter new email:", updated[index].email) || updated[index].email;
    updated[index].phone = prompt("Enter new phone:", updated[index].phone) || updated[index].phone;
    updated[index].address = prompt("Enter new address:", updated[index].address) || updated[index].address;
    updated[index].password = prompt("Enter new password:", updated[index].password) || updated[index].password;
    setUsers(updated);
  };

  // Logout
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Header with Logo */}
      <div className="dashboard-header">
        <Link to="/" className="app-logo">🛒 Ecommerce</Link>
        <h2>Admin Dashboard</h2>
      </div>

      {/* Navbar inside dashboard */}
      <div className="admin-navbar">
        <button onClick={() => { setShowViewUsers(true); setShowAddForm(false); }}>View Users</button>
        <button onClick={() => { setShowAddForm(true); setShowViewUsers(false); }}>Add Users</button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* View Users Section */}
      {showViewUsers && (
        <>
          <input
            type="text"
            className="search-bar"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u, i) => (
                <tr key={i}>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{u.address}</td>
                 
                  <td>
                    <button className="update-btn" onClick={() => handleUpdate(i)}>Update</button>
                    <button className="delete-btn" onClick={() => handleDelete(i)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Add User Form Section */}
      {showAddForm && (
        <form className="form-card" onSubmit={handleAddUser}>
          <h3>Add New User</h3>
          <input placeholder="Username" value={newUser.username} onChange={(e)=>setNewUser({...newUser,username:e.target.value})} />
          <input placeholder="Email" value={newUser.email} onChange={(e)=>setNewUser({...newUser,email:e.target.value})} />
          <input placeholder="Phone" value={newUser.phone} onChange={(e)=>setNewUser({...newUser,phone:e.target.value})} />
          <input placeholder="Address" value={newUser.address} onChange={(e)=>setNewUser({...newUser,address:e.target.value})} />
          <input placeholder="Password" value={newUser.password} onChange={(e)=>setNewUser({...newUser,password:e.target.value})} />
          <button type="submit">Add User</button>
        </form>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdminDashboard;
