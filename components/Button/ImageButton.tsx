import ButtonBase from "./ButtonBase";
import { ImageLabel } from "../Label/ImageLabel";

const ImageButton: React.FC<imageButtonProps> = (props) => (
  <div style={{ width: props.width + "px" }}>
    <ButtonBase {...props} padding={props.padding.toString() + "px"}>
      <ImageLabel {...props} imageSize={props.imageSize ?? 90} />
    </ButtonBase>
  </div>
);

type imageButtonProps = {
  borderColor?: string;
  boxShadow?: string;
  borderRadius?: number;
  backgroundColor?: string;
  color?: string;
  imgUrl?: string;
  title?: string;
  titleAlign?: string;
  titlePadding?: string;
  content?: string;
  contentPadding?: string;
  width?: number;
  maxWidth?: number;
  height?: number;
  imageSize?: number;
  padding: number;
  children?: any;
  onClick?: () => void;
};

export { ImageButton };
