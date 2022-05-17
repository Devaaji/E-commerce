import { Box, Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type MainMainProps = {
  children: ReactNode;
};

const MainMain = ({ children }: MainMainProps) => {
  return <Container maxW={'8xl'}>{children}</Container>;
};

export default MainMain;
