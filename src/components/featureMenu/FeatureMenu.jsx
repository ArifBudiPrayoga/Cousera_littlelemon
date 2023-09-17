import salad from "../../assets/salad.jpg";
import bruschetta1 from "../../assets//bruschetta1.jpg";
import creme from "../../assets/creme.jpg";
import "./FeatureMenu.css";
import Card from "../card/Card";

const FeatureMenu = () => {
  const cardMenu = [
    {
      id: 100,
      image: salad,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order for delivery",
    },
    {
      id: 101,
      image: bruschetta1,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
      order: "Order for delivery",
    },
    {
      id: 102,
      image: creme,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined perfect for an dinner. ",
      order: "Order for delivery",
    },
  ];

  return (
    <div className="feature-menu-container">
      <div className="feature-menu-wrapper global-max-width">
        <div className="feature-menu-top">
          <h3 className="feature-menu-top-title">This week specails!</h3>

          <button className="feature-menu-top-button">Online Menu</button>
        </div>

        <article className="feature-menu-bottom">
          {cardMenu.map((item) => {
            const { image, title, price, description, order, id } = item;
            return (
              <Card
                key={id}
                image={image}
                title={title}
                price={price}
                description={description}
                order={order}
              />
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default FeatureMenu;
