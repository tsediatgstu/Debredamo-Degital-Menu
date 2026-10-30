export default function MenuCard({ item }) {
    const price = Number(item.price);
  
    return (
      <article className="menu-card">
        {item.imageUrl ? (
          <img
            className="menu-image"
            src={item.imageUrl}
            alt={item.name}
            loading="lazy"
          />
        ) : (
          <div className="menu-image image-placeholder" aria-hidden="true">
            <span>Debredamo</span>
          </div>
        )}
  
        <div className="menu-card-content">
          <div className="menu-card-heading">
            <h3>{item.name}</h3>
            <span className="menu-price">
              {Number.isFinite(price) ? `${price.toFixed(2)} ETB` : "Price unavailable"}
            </span>
          </div>
  
          <p className="menu-description">
            {item.description || "Freshly prepared by our kitchen team."}
          </p>
  
          <span className="menu-category">{item.category}</span>
        </div>
      </article>
    );
  }