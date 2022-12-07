import styled, { css } from "styled-components";
import { useSelectedDataContext } from "../../context/DataContext";
import ButtonBase from "./ButtonBase";

const ToggleBtn = styled.button<{ toggle: boolean }>`
  width: 90px;
  height: 50px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: "none";
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: large;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
`;

const Circle = styled.div<{ toggle: boolean }>`
  color: white;
  background-color: ${(props) => (!props.toggle ? "#7b42ad" : "#FF90AD")};
  width: 38px;
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
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(45px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

const Toggle: React.FC = () => {
  const selectedDataContext = useSelectedDataContext();
  const clickedToggle = () => {
    selectedDataContext.update({
      ...selectedDataContext.state,
      toggled: !selectedDataContext.state.toggled,
    });
  };

  return (
    <>
      <ToggleBtn
        onClick={clickedToggle}
        toggle={selectedDataContext.state.toggled}
      >
        <div>남</div>
        <div>여</div>
        <Circle toggle={selectedDataContext.state.toggled}>
          {selectedDataContext.state.toggled ? "여" : "남"}
        </Circle>
      </ToggleBtn>
    </>
  );
};

export { Toggle };
