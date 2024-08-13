import style from "./Card.module.scss";

export const Card = (props) => {
  return (
    <div className={style.cardStyle}>
      <h3>{props.title}</h3>
      <div>
        <img src={props.img}></img>
      </div>
      <h5>Brand: {props.subtitle}</h5>
      <p>Description: {props.text}</p>
      <p>Price: {props.price} USD</p>
    </div>
  );
};
