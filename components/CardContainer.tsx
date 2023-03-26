import styled from "styled-components";
import { CardProps } from "../context/DataContext";
import { Card } from "./Card";

const Container = styled.div`
  margin: 0.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type Props = {
  cardData: Array<CardProps>;
};

const CardContainer: React.FC<Props> = ({ cardData }) => (
  <>
    <Container>
      {cardData.map((data) => {
        return (
          <div key={data.number} style={{ margin: "0.5rem" }}>
            <Card {...data}></Card>
          </div>
        );
      })}
    </Container>
  </>
);

export { CardContainer };
