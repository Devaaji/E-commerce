import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const MainNavbarCartButton = () => {
  return (
    <Button borderColor={'#D7D3D3'} variant="ghost">
      <MdOutlineShoppingCart />
    </Button>
  );
};

export default MainNavbarCartButton;
