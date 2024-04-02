import "./styles-results.css"
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
                        <div id={item.id} className="card-top">
                            <img src={item.image} alt={item.title}></img>
                        </div>
                        <div className="card-content">
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};