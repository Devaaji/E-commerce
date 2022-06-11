import React, { useState } from 'react';

import {
  Box,
  Button,
  HStack,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BiCategory } from 'react-icons/bi';
import { FiChevronRight } from 'react-icons/fi';

const NavbarCategoryButton = () => {
  const [, setSelectedCategoryIndex] = useState(-1);
  return (
    <Popover placement="bottom-start" trigger="hover">
      <PopoverTrigger>
        <Button variant={'ghost'} leftIcon={<BiCategory />} fontWeight="normal">
          Kategori
        </Button>
      </PopoverTrigger>

      <Portal>
        <PopoverContent w="fit-content" color="black">
          <PopoverArrow />
          <PopoverBody>
            <HStack
              alignItems="stretch"
              onMouseLeave={() => setSelectedCategoryIndex(-1)}
            >
              <VStack align="stretch" spacing="0">
                <LinkBox>
                  <HStack minW="44" align="stretch">
                    <Box w="0.5" rounded="md" />
                    <HStack
                      py="1.5"
                      px="3"
                      rounded="md"
                      _hover={{ bg: 'gray.300' }}
                      cursor="pointer"
                      transitionProperty="common"
                      transitionDuration="normal"
                      spacing="4"
                      w="full"
                      fontSize="sm"
                    >
                      <Text as="i" />
                      <LinkOverlay>Categoy Name</LinkOverlay>
                      <Spacer />
                      <FiChevronRight />
                    </HStack>
                  </HStack>
                </LinkBox>
              </VStack>
              <>
                <Box w="0.1px" bg="vocasia-neutral-3" />
                <VStack minW="44" align="stretch" spacing="0">
                  <Button
                    as="a"
                    variant="ghost"
                    fontWeight="normal"
                    justifyContent="flex-start"
                    h="9"
                  >
                    Name
                  </Button>
                </VStack>
              </>
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default NavbarCategoryButton;
