import Slider from "react-slick";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div<carouselProps>`
  overflow: hidden;
  padding: 0 0 50px 0;
  width: ${(props) => props.width};
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
  }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
  text-align: center;
`;

type carouselProps = {
  width: string;
  height: string;
};

const Carousel: React.FC<carouselProps> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const items = [
    { id: 1, url: "/assets/main.svg" },
    { id: 2, url: "/assets/main.svg" },
    { id: 3, url: "/assets/main.svg" },
  ];

  return (
    <>
      <Container {...props}>
        <StyledSlider {...settings}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image
                    src={item.url}
                    alt="test"
                    height={props.height}
                    width={props.width}
                  />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    </>
  );
};

export { Carousel };
