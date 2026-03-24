import "./card.css";

function Card(props) {
  return (
    <div className="card">

      <img
        className="card-img"
        src={props.image}
        alt="villa"
      />

      <div className="card-content">

        <div className="title-row">
          <h2>{props.title}</h2>
          <span className="price">{props.price}</span>
        </div>

        <p className="rating">{props.rating}</p>

        <p className="desc">{props.desc}</p>

        <button className="btn">Reserve Now</button>

      </div>

    </div>
  );
}

export default Card;