import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import IconButtonWithBadge from '../core/iconbuttonwithbadge';

const MainNavbarCartButton = () => {
  return (
    <IconButtonWithBadge
      icon={<MdOutlineShoppingCart />}
      label="Cart"
      badge={1}
    />
  );
};

export default MainNavbarCartButton;
