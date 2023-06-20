import styled from "styled-components";
import { useSearchDataState } from "../context/DataContext";
import { Card } from "./Card";
import { useRouter } from "next/router";

const Container = styled.div`
  margin: 0.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type Props = {
  ids: Array<number>;
  names: Array<string>;
  width?: number;
  height?: number;
  src?: string;
};

const CardContainer: React.FC<Props> = (props) => {
  const count = useSearchDataState().count;
  const router = useRouter();
  return (
    <>
      <Container>
        {props.ids.slice(0, count).map((id, index) => {
          return (
            <div key={id}>
              <Card
                id={id}
                name={props.names[index]}
                width={props.width}
                height={props.height}
                src={props.src}
                onClick={() => {
                  router.push("/detail/" + id);
                }}
              ></Card>
            </div>
          );
        })}
      </Container>
    </>
  );
};
export { CardContainer };
