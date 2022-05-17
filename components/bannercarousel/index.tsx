import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import CarouselSlide from '../carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MainBannerCarousel = () => {
  return (
    <Container maxW={'8xl'}>
      <Box mt="40px" h={'300px'} rounded={'10px'} overflow={'hidden'}>
        <CarouselSlide />
      </Box>
    </Container>
  );
};

export default MainBannerCarousel;
