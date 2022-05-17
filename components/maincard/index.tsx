import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const MainCard = () => {
  return (
    <Flex
      border={'1px'}
      flexDirection={'column'}
      w={'188px'}
      h={'288px'}
      rounded={'10px'}
      overflow={'hidden'}
    >
      <Box bg={'gray.300'} w={'full'} h={'187px'}>
        <Box>Gambar</Box>
      </Box>
      <Box p={'7px'}>
        <Box>
          <Text fontSize={'14px'} textAlign={'center'}>
            MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC{' '}
          </Text>
        </Box>
        <Box
          border={'1px'}
          maxW={'max-content'}
          px={'2px'}
          rounded={'5px'}
          color={'e-second'}
        >
          <Text fontSize={'8px'}>Ready</Text>
        </Box>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Box fontSize={'14px'}>
            <Text color={'e-orange'} fontWeight={'semibold'}>
              Rp.6000.000
            </Text>
          </Box>
          <Box fontSize={'12px'}>
            <Text>23 Terjual</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MainCard;
