import "./Card.css";

function Card({ url, alt }) {
  return (
    <div className="card">
      <img className="cardImg" src={url} alt={alt} />
      <div className="cardBtns">
        <button>Ver más</button>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Card;
