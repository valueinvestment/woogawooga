import styled from "styled-components";

type chipProps = {
  backgroundColor?: string;
  isSelected: boolean;
  label?: string;
};

const ChipContainer = styled.div<chipProps>`
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
  white-space: nowrap;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  border: 0;
  padding: 0;
  vertical-align: middle;
  box-sizing: border-box;
  opacity: ${({ isSelected }) => (isSelected ? 0.5 : 1)};
  caret-color: transparent;

  &:hover {
    opacity: 0.5;
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

const Chip: React.FC<chipProps> = (props) => {
  return (
    <>
      <ChipContainer {...props}>
        <ChipLabelSpan>{props.label}</ChipLabelSpan>
      </ChipContainer>
    </>
  );
};

export { Chip };
