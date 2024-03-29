import styled from "styled-components";
import { useSearchDataState } from "../context/DataContext";
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
  const count = useSearchDataState().count;
  const router = useRouter();
  return (
    <>
      <Container>
        {setData.slice(0, count).map((data) => {
          return (
            <div
              key={data.name}
              onClick={() => {
                router.push("/setDetail/" + data.id);
              }}
              style={{ margin: "5px" }}
            >
              <ImageButton
                {...data}
                imgUrl={"/assets/setImages/" + data.id + ".png"}
                width={400}
                imageSize={110}
                padding={0}
                borderColor={"transparent"}
                borderRadius={2}
                boxShadow={"1px 3px lightgray"}
                title={data.name}
                content={data.subTitle?.[0]}
                titleAlign="left"
                titlePadding="10px 10px 10px 15px"
                contentPadding="10px"
              />
            </div>
          );
        })}
      </Container>
    </>
  );
};

export { SetContainer };
