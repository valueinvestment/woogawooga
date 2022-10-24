import React from "react";
import styled from "styled-components";
import { Chip } from "./Button/Chip";

type Chip = {
  key: number;
  label: string;
  isSelected: boolean;
};

const Container = styled.div`
  width: 70%;

  ul {
    list-style: none;
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
    justify-content: center;

    li {
      margin: 4px;

      &:not(:last-child) {
      }
    }
  }
`;


type Props = {
  chipData: Array<Chip>;
};

const Chips: React.FC<Props> = ({ chipData }) => (
  <Container>
    <ul>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip {...data}></Chip>
          </li>
        );
      })}
    </ul>
  </Container>
);

export { Chips };
