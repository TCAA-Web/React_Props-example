import style from "../Footer/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footerStyle}>
      <div>
        <ul>
          <li>Adresse:</li>
          <li>Supergate 232</li>
          <li>9232 Trondheim</li>
          <li>Tlf: 23231212</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Links:</li>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Legal:</li>
          <li>Cookie Policy</li>
          <li>GDPR</li>
        </ul>
      </div>
    </footer>
  );
};
