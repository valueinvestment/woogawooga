import styled from "styled-components";
import { Card } from "./Card";

type Card = {
  key: number;
  title?: string;
  imgUrl?: string;
  width?: string;
  height?: string;
};

const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type Props = {
  cardData: Array<Card>;
};

const CardContainer: React.FC<Props> = ({ cardData }) => (
  <>
    <Container>
      {cardData.map((data) => {
        return (
          <div key={data.key} style={{ margin: "1rem" }}>
            <Card {...data}></Card>
          </div>
        );
      })}
    </Container>
  </>
);

export { CardContainer };
