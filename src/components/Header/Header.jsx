import style from "./Header.module.scss";

export const Header = (props) => {
  return (
    <header
      style={{
        backgroundImage: `url(https://picsum.photos/1280/860?random=${props.random})`,
      }}
      id={props.id}
      className={style.headerStyle}
    >
      <h1>{props.title}</h1>
    </header>
  );
};
