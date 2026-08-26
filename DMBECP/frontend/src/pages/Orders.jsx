import Navbar from "../components/Navbar";
import "../styles/App.css";

function Orderssss() {
  const orders = [
    { id: 1, product: "Laptop", status: "Delivered" },
    { id: 2, product: "Smartphone", status: "Shipped" },
    { id: 3, product: "Headphones", status: "Processing" },
  ];

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center", color: "#007bff" }}>My Orders</h2>
      <div className="orders-list">
        {orders.map((o) => (
          <div key={o.id} className="order-card">
            <h3>{o.product}</h3>
            <p>Status: {o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
