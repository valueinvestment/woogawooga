import { Console } from "console";
import Image from "next/image";
import styled from "styled-components";
import {
  useSearchAction,
  useSelectedDataState,
} from "../../context/DataContext";

type inputProps = {
  active?: boolean; // making this props optional
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  defaultValue?: string;
  width?: string;
  height?: string;
  children?: any;
};

const SearchContainer = styled.div<inputProps>`
  display: inline-flex;
  border: solid;
  border-radius: 1.5rem;
  border-color: ${(props) => props.borderColor};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: x-large;
  box-shadow: 5px 10px 8px ${(props) => props.borderColor};
  outline: none;
  margin: 1rem;
`;

SearchContainer.defaultProps = {
  color: "#D9D9D9",
  borderColor: "#D9D9D9",
  height: "60px",
};

const Input = styled.input<inputProps>`
  border: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: x-large;
  outline: none;
  padding: 20px;
  caret-color: #d9d9d9;
`;

Input.defaultProps = {
  color: "#D9D9D9",
  borderColor: "#D9D9D9",
  backgroundColor: "transparent",
  width: "100%",
  placeholder: "",
};

const SearchInput: React.FC<inputProps> = (props) => {
  // const { searchAction } = useSearchAction();
  // const selectedData = useSelectedDataState();

  return (
    <>
      <SearchContainer>
        <Input
          type="text"
          defaultValue={props.defaultValue}
          onChange={(val) => {
            // searchAction(val.target.value.toString().trim());
          }}
          // value={selectedData.title}
        />
        <div style={{ margin: "0 1rem", display: "flex" }}>
          <Image
            src="/assets/icon/search.svg"
            alt="search"
            width="32px"
            height="32px"
          />
        </div>
      </SearchContainer>
    </>
  );
};

export { SearchInput };
