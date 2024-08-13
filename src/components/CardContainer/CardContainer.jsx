import style from "./CardContainer.module.scss";

export const CardContainer = (props) => {
  return <section className={style.containerStyle}>{props.children}</section>;
};
