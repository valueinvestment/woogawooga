import styled from "styled-components";
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
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgba(0, 0, 0, 0.08)"};
  border-radius: 16px;
  border-color: ${({ isReadonly, isSelected }) =>
    isReadonly ? "transparent" : isSelected ? "#FF8EAE" : "transparent"};
  border-style: solid;
  border-width: 1px;
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

  &:hover {
    opacity: ${({ isReadonly, isSelected }) =>
      isReadonly ? 1 : isSelected ? 0.5 : 1};
  }
`;

ChipContainer.defaultProps = {
  isSelected: false,
};

const ChipLabelSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 12px;
  padding-right: 12px;
  white-space: nowrap;
`;

const Chip: React.FC<ChipProps> = (props) => {
  const { updateIsSelected } = useTagActions();
  return (
    <>
      <ChipContainer
        {...props}
        onClick={(e) => {
          updateIsSelected(props.number);
        }}
      >
        <ChipLabelSpan>{props.label}</ChipLabelSpan>
      </ChipContainer>
    </>
  );
};

export { Chip };
