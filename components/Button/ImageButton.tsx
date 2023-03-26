import ButtonBase from "./ButtonBase";
import { ImageLabel } from "../Label/ImageLabel";

const ImageButton: React.FC<imageButtonProps> = (props) => (
  <>
    <ButtonBase {...props} padding={props.padding.toString() + "px"}>
      <ImageLabel
        {...props}
        imageSize={props.imageSize ?? 90}
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
  width?: number;
  height?: number;
  imageSize?: number;
  padding: number;
  children?: any;
  onClick?: () => void;
};

export { ImageButton };
