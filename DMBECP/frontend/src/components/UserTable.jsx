function UserTable({ searchTerm }) {
  const users = [
    { username: "user1", email: "user1@gmail.com", phone: "7234567890", address: "Hyderabad-500038", password: "........" },
    { username: "alice", email: "alice@gmail.com", phone: "9876543210", address: "Delhi", password: "........" },
	{ username: "seconduser10", email: "seconduser@gmail.com", phone: "6367890956", address: "Banglore", password: "........" },
	 { username: "juliet20", email: "juliet@gmail.com", phone: "8876548344", address: "Mumbai", password: "......." }
  ];

  const filtered = users.filter(
    (u) =>
      u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
	  u.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
	  u.password.toLowerCase().includes(searchTerm.toLowerCase()) ||
	  u.phone.includes(searchTerm)
  );

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>    
        </tr>
      </thead>
      <tbody>
        {filtered.map((u, i) => (
          <tr key={i}>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
            <td>{u.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
