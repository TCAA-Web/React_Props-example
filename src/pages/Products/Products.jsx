import { Button } from "../../components/Button/Button";
import { ButtonContainer } from "../../components/ButtonContainer/ButtonContainer";
import { Card } from "../../components/Card/Card";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Header } from "../../components/Header/Header";
import { dummyData } from "../../data/dummyData";

export const Products = (props) => {
  console.log(dummyData);
  return (
    <>
      <Header random={3} id="products" title={props.title} />
      <CardContainer>
        {dummyData.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              price={product.price}
              text={product.description}
              subtitle={product.category}
              img={product.images[0]}
            />
          );
        })}
      </CardContainer>

      <Header title="Button Examples" id={4} />
      <ButtonContainer>
        <Button
          text="Button 1"
          theme="dark"
          size="small"
          action={() => alert("I am button 1")}
        />
        <Button
          text="Button 2"
          theme="light"
          size="medium"
          action={() => alert("I am button 2")}
        />
        <Button
          text="Button 3"
          theme="light"
          size="large"
          action={() => alert("I am button 3")}
        />
        <Button
          text="Button default"
          action={() => alert("I am a default button")}
        />
      </ButtonContainer>
    </>
  );
};
