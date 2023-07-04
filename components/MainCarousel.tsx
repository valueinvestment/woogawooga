import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div<carouselProps>`
  overflow: hidden;
  padding: 0 0 50px 0;
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    margin: 0.2rem 0rem 0rem 0rem;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
`;

type carouselProps = {
  width: string;
  height: string;
};

const MainCarousel: React.FC<carouselProps> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const items = [
    { id: 1, url: "/assets/carousel/MainCarousel1.png" },
    { id: 2, url: "/assets/carousel/MainCarousel2.png" },
    { id: 3, url: "/assets/carousel/MainCarousel3.png" },
    { id: 4, url: "/assets/carousel/MainCarousel4.png" },
  ];

  return (
    <>
      <Container {...props}>
        <StyledSlider {...settings}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} alt={item.url} width="450px" height="200px" />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    </>
  );
};

export { MainCarousel };
