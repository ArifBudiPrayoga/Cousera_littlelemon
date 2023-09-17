import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, title, price, description, order }) => {
  return (
    <article className="card-container">
      <div className="card-img">
        <img src={image} alt="Special dessert" />
      </div>

      <div className="card-text">
        <div className="card-title">
          <h3>{title}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p>{description}</p>

        <Link to="#">
          <div className="card-order-btn">
            <button>{order}</button>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Card;
