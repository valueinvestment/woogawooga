import styled from "styled-components";
import Image from "next/image";
import { useTagActions } from "../../context/DataContext";
import { ChipProps } from "../../context/DataContext";

const ChipContainer = styled.div<ChipProps>`
  max-width: 100%;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.8125rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 2px 2px 0px grey;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgba(0, 0, 0, 0.08)"};
  border-radius: 16px;
  /* border-color: ${({ isReadonly, isSelected }) =>
    isReadonly ? "transparent" : isSelected ? "#FF8EAE" : "transparent"};
  border-style: solid; */
  /* border-width: 1px; */
  white-space: nowrap;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: ${({ isReadonly }) => (isReadonly ? "arrow" : "pointer")};
  outline: 0;
  text-decoration: none;
  padding: 0;
  vertical-align: middle;
  box-sizing: border-box;
  opacity: ${({ isReadonly, isSelected }) =>
    isReadonly ? 1 : isSelected ? 1 : 0.5};
  caret-color: transparent;
`;

ChipContainer.defaultProps = {
  isSelected: false,
};

const ChipLabelSpan = styled.span<ChipProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 16px;
  padding-left: ${({ imgUrl }) => (imgUrl != undefined ? "0px" : "16px")};
  white-space: nowrap;
`;

const Chip: React.FC<ChipProps> = (props) => {
  const { updateIsSelected } = useTagActions();
  return (
    <>
      <ChipContainer
        {...props}
        onClick={() => {
          if (!props.isReadonly) {
            updateIsSelected(props.chipId);
          }
        }}
      >
        <div
          style={{
            margin: "5px 10px",
            alignSelf: "end",
            display: props.imgUrl != undefined ? "block" : "none",
          }}
        >
          <Image
            src={props.imgUrl || "/favicon.ico"}
            alt=""
            height={16}
            width={16}
          />
        </div>
        <ChipLabelSpan {...props}>{props.label}</ChipLabelSpan>
      </ChipContainer>
    </>
  );
};

export { Chip };
