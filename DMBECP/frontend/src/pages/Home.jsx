import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "../styles/App.css";

function Homeee() {
  // Electronics products with local images
  const products = [
    { name: "Laptop", image: "/images/electronics/laptop.webp" },
    { name: "Smartphone", image: "/images/electronics/smartphone.webp" },
    { name: "Tablet", image: "/images/electronics/tablet.webp" },
    { name: "Smartwatch", image: "/images/electronics/smartwatch.webp" },
    { name: "Camera", image: "/images/electronics/camera.webp" },
    { name: "Headphones", image: "/images/electronics/headphones.webp" },
    { name: "Bluetooth Speaker", image: "/images/electronics/speaker.webp" },
    { name: "Gaming Console", image: "/images/electronics/console.webp" },
    { name: "Keyboard", image: "/images/electronics/keyboard.webp" },
    { name: "Mouse", image: "/images/electronics/mouse.webp" },
    { name: "Monitor", image: "/images/electronics/monitor.webp" },
    { name: "Drone", image: "/images/electronics/drone.png" },
    { name: "Printer", image: "/images/electronics/printer.png" },
    { name: "Router", image: "/images/electronics/router.png" },
    { name: "Smart TV", image: "/images/electronics/smarttv.webp" },
    { name: "Projector", image: "/images/electronics/projector.png" },
    { name: "VR Headset", image: "/images/electronics/vr.webp" },
    { name: "External Hard Drive", image: "/images/electronics/harddrive.webp" },
    { name: "USB Flash Drive", image: "/images/electronics/usb.webp" },
    { name: "Smart Home Device", image: "/images/electronics/smarthome.webp" },
    { name: "Microwave", image: "/images/electronics/microwave.webp" },
    { name: "Washing Machine", image: "/images/electronics/washingmachine.webp" },
    { name: "Refrigerator", image: "/images/electronics/refrigerator.webp" },
    { name: "Air Conditioner", image: "/images/electronics/ac.webp" },
    { name: "Electric Fan", image: "/images/electronics/fan.webp" },
    { name: "Hair Dryer", image: "/images/electronics/hairdryer.webp" },
    { name: "Electric Shaver", image: "/images/electronics/shaver.webp" },
    { name: "Power Bank", image: "/images/electronics/powerbank.webp" },
    { name: "Fitness Tracker", image: "/images/electronics/fitnesstracker.webp" },
    { name: "Digital Photo Frame", image: "/images/electronics/photoframe.webp" },
    { name: "Smart Glasses", image: "/images/electronics/smartglasses.webp" },
    { name: "Portable Speaker", image: "/images/electronics/portablespeaker.webp" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter products by search term
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header with Logo + Navbar */}
      <header className="home-header">
        <Link to="/" className="app-logo">🛒 Ecommerce</Link>
        <nav className="home-navbar">
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/customer">Cart</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to Ecommerce Platform</h1>
        <p>Shop the best products at affordable prices</p>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <h2 className="featured-title">Featured Products</h2>
      <div className="product-grid">
        {filteredProducts.map((p, i) => (
          <ProductCard key={i} name={p.name} image={p.image} />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
