import React from 'react';

import { Box, Container, Flex, Text } from '@chakra-ui/react';

import MainCard from '../maincard';

const MainRecomendation = () => {
  return (
    <>
      <Container maxW="8xl" mt={'40px'}>
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          fontWeight={'bold'}
          my={'10px'}
        >
          <Box>
            <Text fontSize={'24px'}>Produk Terbaru ...</Text>
          </Box>
          <Box>
            <Text fontSize={'16px'} color={'e-second'}>
              Lihat Semuanya
            </Text>
          </Box>
        </Flex>
      </Container>
      <MainCard />
    </>
  );
};

export default MainRecomendation;
