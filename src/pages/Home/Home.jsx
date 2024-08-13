import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import { TextSection } from "../../components/TextSection/TextSection";

export const Home = (props) => {
  const homeText = `Hello and welcom to my site. Its not great yet but maybe it will be some day!`;

  return (
    <>
      <Header random={1} title={props.title} />
      <Header random={5} />
      <TextSection textContent={homeText} />
    </>
  );
};
