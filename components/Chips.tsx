import React from "react";
import styled from "styled-components";
import { Chip } from "./Button/Chip";

type Chip = {
  key: number;
  label: string;
  isSelected: boolean;
};

type Props = {
  chipData: Array<Chip>;
};

const Chips: React.FC<Props> = ({ chipData }) => (
  <Container>
    <div className="content">
      <ul>
        {chipData.map((data) => {
          return (
            <li key={data.key}>
              <Chip {...data}></Chip>
            </li>
          );
        })}
      </ul>
    </div>
  </Container>
);

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;

  .content {
    ul {
      list-style: none;
      margin-bottom: 5rem;
      display: flex;
      padding: 4px;
      li {
        margin: 4px;

        &:not(:last-child) {
        }
      }
    }
  }
`;

export { Chips };
