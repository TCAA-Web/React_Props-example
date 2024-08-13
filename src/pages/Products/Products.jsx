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
    </>
  );
};
