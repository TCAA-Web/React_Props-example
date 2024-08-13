import style from "./Navbar.module.scss";

export const Navbar = (props) => {
  return (
    <nav className={style.navStyle}>
      <ul>
        {props.navLinks.map((link) => {
          return (
            <a key={link.url} href={link.url}>
              {link.title.toUpperCase()}
            </a>
          );
        })}
      </ul>
    </nav>
  );
};
