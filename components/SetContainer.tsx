import styled from "styled-components";
import { SetProps } from "../context/DataContext";
import { ImageButton } from "./Button/ImageButton";
import { useRouter } from "next/router";

const Container = styled.div`
  margin: 1rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type Props = {
  setData: Array<SetProps>;
};

const SetContainer: React.FC<Props> = ({ setData }) => {
  const router = useRouter();
  return (
    <>
      <Container>
        {setData.map((data) => {
          return (
            <div
              key={data.name}
              onClick={() => {
                router.push("/setDetail/" + data.id);
              }}
            >
              <ImageButton
                {...data}
                width={500}
                height={100}
                padding={0}
                borderColor={"transparent"}
                borderRadius={2}
                boxShadow={"1px 3px lightgray"}
              ></ImageButton>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export { SetContainer };
