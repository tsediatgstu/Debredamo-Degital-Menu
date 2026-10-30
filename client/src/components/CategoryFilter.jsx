const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Drinks",
    "Coffee",
    "Dessert",
  ];
  
  export default function CategoryFilter({ selected, onSelect }) {
    return (
      <div className="category-list" aria-label="Menu categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-button ${
              selected === category ? "active" : ""
            }`}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }