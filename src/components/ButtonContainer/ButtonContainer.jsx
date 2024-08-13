import style from "./ButtonContainer.module.scss";

export const ButtonContainer = (props) => {
  return <div className={style.buttonContainerStyle}>{props.children}</div>;
};
