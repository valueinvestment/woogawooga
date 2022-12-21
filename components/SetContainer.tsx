import styled from "styled-components";
import { SetProps } from "../context/DataContext";
import { ImageButton } from "./Button/ImageButton";

const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type Props = {
  setData: Array<SetProps>;
};

const SetContainer: React.FC<Props> = ({ setData }) => (
  <>
    <Container>
      {setData.map((data) => {
        return (
          <div key={data.title}>
            <ImageButton
              {...data}
              width={500}
              height={120}
              padding={0}
              borderColor={"transparent"}
              boxShadow={"1px 3px lightgray"}
            ></ImageButton>
          </div>
        );
      })}
    </Container>
  </>
);

export { SetContainer };
