import styled, { css } from "styled-components";
import { useSelectedDataContext } from "../../context/DataContext";
import ButtonBase from "./ButtonBase";

const ToggleContainer = styled.div<{ toggledIndex: number }>`
  width: 160px;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: whitesmoke;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: large;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
`;

const ToogleButton = styled.div`
  cursor: pointer;
  padding: 10px;
`;

const Circle = styled.div<{ toggledIndex: number }>`
  color: white;
  background-color: ${(props) =>
    props.toggledIndex == 0
      ? "brown"
      : props.toggledIndex == 1
      ? "#7b42ad"
      : "#FF90AD"};
  width: ${(props) => {
    switch (props.toggledIndex) {
      case 0:
        return "58px";
      default:
        return "38px";
    }
  }};
  height: 38px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  font-size: large;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  ${(props) => {
    switch (props.toggledIndex) {
      case 0:
        return css`
          transform: translate(0px, 0);
          transition: all 0.5s ease-in-out;
        `;
      case 1:
        return css`
          transform: translate(60px, 0);
          transition: all 0.5s ease-in-out;
        `;
      case 2:
        return css`
          transform: translate(105px, 0);
          transition: all 0.5s ease-in-out;
        `;
    }
  }}
`;

const Toggle: React.FC = () => {
  const selectedDataContext = useSelectedDataContext();
  const clickedToggle = (event: any) => {
    console.log(event.target.dataset.index);
    selectedDataContext.update({
      ...selectedDataContext.state,
      toggledIndex: Number(event.target.dataset.index),
    });
  };

  return (
    <>
      <ToggleContainer toggledIndex={selectedDataContext.state.toggledIndex}>
        <ToogleButton data-index="0" onClick={clickedToggle}>
          종합
        </ToogleButton>
        <ToogleButton data-index="1" onClick={clickedToggle}>
          남
        </ToogleButton>
        <ToogleButton data-index="2" onClick={clickedToggle}>
          여
        </ToogleButton>
        <Circle toggledIndex={selectedDataContext.state.toggledIndex}>
          {selectedDataContext.state.toggledIndex == 0
            ? "종합"
            : selectedDataContext.state.toggledIndex == 1
            ? "남"
            : "여"}
        </Circle>
      </ToggleContainer>
    </>
  );
};

export { Toggle };
