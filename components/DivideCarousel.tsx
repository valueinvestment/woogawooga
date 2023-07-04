import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div<carouselProps>`
  overflow: hidden;
  // padding: 0 0 50px 0;
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

const DivideCarousel: React.FC<carouselProps> = (props) => {
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
    { id: 1, url: "/assets/carousel/carousel1.jpg" },
    { id: 2, url: "/assets/carousel/carousel2.jpg" },
    { id: 3, url: "/assets/carousel/carousel3.jpg" },
    { id: 4, url: "/assets/carousel/carousel4.jpg" },
    { id: 5, url: "/assets/carousel/carousel5.jpg" },
    { id: 6, url: "/assets/carousel/carousel6.jpg" },
    { id: 7, url: "/assets/carousel/carousel7.jpg" },
  ];

  return (
    <>
      <Container {...props}>
        <StyledSlider {...settings}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} alt={item.url} width="400px" height="80px" />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    </>
  );
};

export { DivideCarousel };
