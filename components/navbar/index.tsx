import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { FiBell, FiMail, FiSearch } from 'react-icons/fi';
import NextLink from 'next/link';
import NavbarCategoryButton from '../navbarcategorybutton';
import MainNavbarCartButton from '../navbarcartbutton';
import useRemoteUserProfile from '../../hooks/remote/useRemoteUserProfile';
import MainNavbarUserButton from '../main/navbaruserbutton';
import IconButtonWithBadge from '../core/iconbuttonwithbadge';

const MainNavbar = () => {
  const { data: userProfile } = useRemoteUserProfile();

  const responMobile = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
    border={'2px'}
      flexDirection={'column'}
      w={'full'}
      h="max-content"
      boxShadow={'0px 2px 10px rgba(0, 0, 0, 0.25)'}
    >
      <Flex bg={'#429C97'} color="white" p="5px" pt="10px">
        <Text w="full" textAlign={'center'}>
          Welcome to E-commerce Depdep - Buka Senin-Sabtu, 10:00-18:00 WIB
        </Text>
      </Flex>
      <Flex w={'full'} h={'full'} p='10px' justifyContent="center" alignItems={'center'}>
        <HStack spacing={'10px'}>
          {responMobile && (
            <NextLink href="/" passHref>
              <Link as="a">
                <Text fontSize={'2xl'} fontWeight={'bold'}>
                  E-Commerce
                </Text>
              </Link>
            </NextLink>
          )}
          {responMobile && <NavbarCategoryButton />}
          <InputGroup w={{ base: 'full', lg: '900px' }}>
            <InputRightElement color="e-main" pointerEvents="none">
              <FiSearch />
            </InputRightElement>
            <Input
              type="text"
              rounded="3xl"
              bg="#F8F8F8"
              borderColor="e-main"
              placeholder="Cari Disini"
            />
          </InputGroup>
          <MainNavbarCartButton />
          <ButtonGroup>
            <HStack>
              {userProfile && (
                <IconButtonWithBadge
                  icon={<FiMail />}
                  label="Notifications"
                  badge={1}
                />
              )}
              {userProfile && (
                <IconButtonWithBadge
                  icon={<FiBell />}
                  label="Notifications"
                  badge={1}
                />
              )}
            </HStack>
            {userProfile ? (
              <MainNavbarUserButton />
            ) : (
              <>
                <NextLink href="/login" passHref>
                  <Button
                    as="a"
                    variant={'ghost'}
                    color="e-second"
                    border={'1px'}
                    borderColor={'e-second'}
                  >
                    Masuk
                  </Button>
                </NextLink>
                <NextLink href="/signup" passHref>
                  <Button
                    as="a"
                    bg={'e-second'}
                    color="white"
                    _hover={{ bg: 'hover-second' }}
                  >
                    Daftar
                  </Button>
                </NextLink>
              </>
            )}
          </ButtonGroup>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default MainNavbar;
