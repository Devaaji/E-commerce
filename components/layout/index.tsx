import { Box, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import MainFooter from '../footer';
import MainMain from '../main';
import MainNavbar from '../navbar';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box overflow={'hidden'}>
      <MainNavbar />
      <MainMain>{children}</MainMain>
      <MainFooter />
    </Box>
  );
};

export default MainLayout;
