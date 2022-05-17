import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const CarouselSlide = () => {
  const Images = [
    {
      name: 'Slide 1',
      src: 'https://enterkomputer.com/web-assets/frontend/banner/home/Banner-Unboxing-2022-1646725795.jpg',
    },
    {
      name: 'Slide 2',
      src: 'https://enterkomputer.com/web-assets/frontend/banner/home/Banner-Slider-Home-Enterkomputer-1646103970.jpg',
    },
  ];
  return (
    <Carousel
      showThumbs={false}
      swipeable
      infiniteLoop
      autoPlay={true}
      interval={5000}
      showStatus={false}
      showIndicators={true}
    >
      {Images.map((image) => (
        <Box key={image.name}>
          <Image
            objectFit="cover"
            h={'300px'}
            alt={image.name}
            src={image.src}
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselSlide;
