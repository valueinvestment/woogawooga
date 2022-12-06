import React from "react";
import styled from "styled-components";
import { ChipProps } from "../context/DataContext";
import { Chip } from "./Button/Chip";

const Container = styled.div`
  width: 70%;

  ul {
    list-style: none;
    margin: 1rem;
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

const Chips: React.FC<Props> = ({ chipData, isReadonly }) => (
  <>
    <Container>
      <ul>
        {chipData.map((data) => {
          return (
            <li key={data.number}>
              <Chip {...data} isReadonly={isReadonly}></Chip>
            </li>
          );
        })}
      </ul>
    </Container>
  </>
);

Chips.defaultProps = { isReadonly: false };

export { Chips };
