import "./App.css";
import Card from "./Card";
import Navbar from "./components/Navbar";

function App() {

  const villas = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      title: "Moonstar Villa",
      price: "$67/night",
      rating: "⭐⭐⭐⭐⭐ 650+ Ratings",
      desc: "A private seaside retreat with spacious rooms."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      title: "Ocean Breeze Resort",
      price: "$120/night",
      rating: "⭐⭐⭐⭐ 420+ Ratings",
      desc: "Luxury resort with ocean view."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
      title: "Mountain Escape",
      price: "$90/night",
      rating: "⭐⭐⭐⭐⭐ 520+ Ratings",
      desc: "Beautiful mountain cabin surrounded by nature."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      title: "City Apartment",
      price: "$80/night",
      rating: "⭐⭐⭐⭐ 300+ Ratings",
      desc: "Modern apartment in city center."
    }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Cards Section */}
      <div className="app">
        {villas.map((villa) => (
          <Card key={villa.id} {...villa} />
        ))}
      </div>
    </>
  );
}

export default App;