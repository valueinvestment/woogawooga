import React from "react";
import styled from "styled-components";
import { ChipProps } from "../context/DataContext";
import { Chip } from "./Button/Chip";

const Container = styled.div`
  width: 100%;

  ul {
    list-style: none;
    margin: 0.5rem 1rem;
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
    justify-content: left;

    li {
      margin: 4px;

      &:not(:last-child) {
      }
    }
  }
`;

type Props = {
  chipData: Array<ChipProps>;
  isReadonly?: boolean;
};

const Chips: React.FC<Props> = ({ chipData, isReadonly }) => {
  let categorySet = new Set(chipData.map((data) => data.category));
  let categorys = Array.from(categorySet);

  return (
    <>
      <Container>
        {categorys.map((category) => {
          return (
            <>
              <p
                style={{
                  fontSize: "small",
                  margin: "0px 40px",
                  textAlign: "left",
                }}
              >
                {category}
              </p>
              <ul>
                {chipData
                  .filter((data) => data.category === category)
                  .map((data) => {
                    return (
                      <li key={data.chipId}>
                        <Chip {...data} isReadonly={isReadonly}></Chip>
                      </li>
                    );
                  })}
              </ul>
            </>
          );
        })}
      </Container>
    </>
  );
};
Chips.defaultProps = { isReadonly: false };

export { Chips };
