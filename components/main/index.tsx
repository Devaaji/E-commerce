import React, { ReactNode } from 'react';

import { Container } from '@chakra-ui/react';

type MainMainProps = {
  children: ReactNode;
};

const MainMain = ({ children }: MainMainProps) => {
  return <Container maxW={'8xl'}>{children}</Container>;
};

export default MainMain;
