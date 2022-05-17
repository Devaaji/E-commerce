import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import ImageSignup from '../../assets/images/SignUpImage.png';
import NextImage from '../nextimage';

const LayoutImageAuth = () => {
  return (
    <Flex w={'full'} justifyContent={'center'}>
      <Box>
        <NextImage src={ImageSignup} alt="" />
      </Box>
    </Flex>
  );
};

export default LayoutImageAuth;