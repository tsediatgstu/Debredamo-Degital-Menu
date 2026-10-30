export default function SearchBar({ value, onChange }) {
    return (
      <div className="search-box">
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          placeholder="Search food, drinks, coffee..."
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-label="Search menu"
        />
      </div>
    );
  }