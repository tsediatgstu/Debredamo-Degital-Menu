
import { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Ethiopian Breakfast",
    description: "A delicious traditional breakfast.",
    price: 250,
    category: "Breakfast",
  },
  {
    id: 2,
    name: "Grilled Chicken",
    description: "Grilled chicken served with fresh sides.",
    price: 450,
    category: "Lunch",
  },
  {
    id: 3,
    name: "Fresh Juice",
    description: "Refreshing seasonal fruit juice.",
    price: 120,
    category: "Drinks",
  },
  {
    id: 4,
    name: "Ethiopian Coffee",
    description: "Freshly brewed Ethiopian coffee.",
    price: 80,
    category: "Coffee",
  },
];

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Drinks",
    "Coffee",
    "Dessert",
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      category === "All" || item.category === category;

    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Debredamo Hotel</h1>
        <p>Food & Beverage Digital Menu</p>
      </header>

      <main style={styles.main}>
        <h2>Welcome to Debredamo Hotel</h2>
        <p>Discover our delicious food and beverages.</p>

        <input
          style={styles.search}
          type="search"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div style={styles.categories}>
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              style={{
                ...styles.button,
                background: category === item ? "#174c36" : "#ffffff",
                color: category === item ? "#ffffff" : "#174c36",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div style={styles.grid}>
          {filteredItems.map((item) => (
            <article key={item.id} style={styles.card}>
              <span style={styles.tag}>{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <strong>{item.price.toFixed(2)} ETB</strong>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p>No menu items found. Try another search.</p>
        )}
      </main>

      <footer style={styles.footer}>
        Thank you for choosing Debredamo Hotel.
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f7f7f1",
    color: "#24352b",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    background: "#103626",
    color: "white",
    padding: "24px 6%",
  },
  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "35px 20px 55px",
  },
  search: {
    width: "100%",
    maxWidth: "500px",
    padding: "13px",
    margin: "18px 0",
    border: "1px solid #ccd5cc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  categories: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "25px",
  },
  button: {
    padding: "10px 16px",
    border: "1px solid #174c36",
    borderRadius: "22px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "22px",
    borderRadius: "12px",
    border: "1px solid #e1e7df",
    boxShadow: "0 4px 12px #00000008",
  },
  tag: {
    color: "#8b6c32",
    fontSize: "12px",
    fontWeight: "bold",
  },
  footer: {
    background: "#103626",
    color: "white",
    textAlign: "center",
    padding: "22px",
  },
};
