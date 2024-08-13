import style from "./TextSection.module.scss";

export const TextSection = (props) => {
  return (
    <article className={style.textSection}>
      <p>{props.textContent}</p>
    </article>
  );
};
