import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import "../styles/App.css";

function Cartttt() {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center", color: "#007bff" }}>My Cart</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div className="product-grid">
          {cart.map((item, i) => (
            <div key={i} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={clearCart}>Clear Cart</button>
          <button style={{ marginLeft: "10px" }}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
