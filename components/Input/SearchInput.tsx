import Image from "next/image";
import styled from "styled-components";

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
`;

SearchContainer.defaultProps = {
  color: "#D9D9D9",
  borderColor: "#D9D9D9",
  width: "368px",
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
  width: "316px",
  height: "60px",
  placeholder: "아직 기능 없음",
};

const SearchInput: React.FC<inputProps> = (props) => {
  return (
    <>
      <SearchContainer>
        <Input type="text" defaultValue={props.defaultValue}></Input>
        <Image
          src="/assets/icon/search.svg"
          alt="search"
          width="32px"
          height="50px"
        />
      </SearchContainer>
    </>
  );
};

export { SearchInput };
