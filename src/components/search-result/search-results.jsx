import "./styles-results.css";
import placeholderImage from "../assets/placeholder.png";

export default function Results({ data, onCardClick }) {
  return (
    <div className="container-results">
      <div className="cards">
        {data.results.map((item, index) => (
          <div
            className="card"
            onClick={() => onCardClick(item.id)}
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = placeholderImage;
              }}
            />
            <span className="title-contain">{item.title}</span>
            <span className="inscription-contain">SHOW RECIPE</span>
          </div>
        ))}
      </div>
    </div>
  );
}
