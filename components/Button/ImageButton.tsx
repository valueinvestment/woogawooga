import ButtonBase from "./ButtonBase";
import { ImageLabel } from "../Label/ImageLabel";

const ImageButton: React.FC<imageButtonProps> = (props) => (
  <>
    <ButtonBase {...props} padding={props.padding.toString() + "px"}>
      <ImageLabel
        {...props}
        width={props.width - props.padding * 2}
        height={props.height - props.padding * 2}
      />
    </ButtonBase>
  </>
);

type imageButtonProps = {
  borderColor?: string;
  boxShadow?: string;
  backgroundColor?: string;
  color?: string;
  imgUrl?: string;
  title?: string;
  content?: string;
  width: number;
  height: number;
  padding: number;
  children?: any;
  onClick?: () => void;
};

export { ImageButton };
