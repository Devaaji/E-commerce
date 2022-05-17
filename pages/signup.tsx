import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  VStack,
  Icon,
  InputGroup,
  IconButton,
  InputRightElement,
  LightMode,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import MainLayout from '../components/layout';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import LayoutImageAuth from '../components/layoutimage';

const SignUpPage = () => {
  const { isOpen: isPasswordOpen, onToggle: onPasswordToggle } =
    useDisclosure();

  return (
    <MainLayout>
      <NextSeo title="Daftar" titleTemplate="%s | E-Commerce" />
      <Flex minH={'80vh'} align={'center'} justify={'center'}>
        <LayoutImageAuth />
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Box
            w="400px"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'0px 0px 3px 3px rgba(0, 0, 0, 0.25)'}
            p={8}
          >
            <Stack spacing={4} color={'e-main'}>
              <Box w={'full'} color="e-main" textAlign={'center'}>
                <Text fontSize="22px" fontWeight={'semibold'}>
                  Daftar Sekarang
                </Text>
                <Text>
                  Saya sudah punya akun?{' '}
                  <NextLink href={'/login'} passHref>
                    <Link as="a" color={'e-second'} fontWeight="semibold">
                      Masuk
                    </Link>
                  </NextLink>
                </Text>
              </Box>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={isPasswordOpen ? 'text' : 'password'} />
                  <InputRightElement>
                    <IconButton
                      bg="transparent"
                      _hover={{ bg: 'transparent' }}
                      variant="ghost"
                      aria-label={
                        isPasswordOpen ? 'Mask password' : 'Reveal password'
                      }
                      icon={
                        isPasswordOpen ? (
                          <BsFillEyeFill />
                        ) : (
                          <BsFillEyeSlashFill />
                        )
                      }
                      onClick={onPasswordToggle}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={2}>
                <Button
                  bg={'e-main'}
                  color={'white'}
                  _hover={{
                    bg: 'e-second',
                  }}
                >
                  Daftar
                </Button>
                <Box textAlign="center">
                  <Text fontWeight={'semibold'}>Atau</Text>
                </Box>
                <VStack spacing="4">
                  <NextLink href="/login-google" passHref>
                    <Button
                      border={'1px'}
                      variant="outline-text"
                      leftIcon={<Icon as={FcGoogle} fontSize="xl" />}
                      isFullWidth
                    >
                      Lanjutkan dengan Google
                    </Button>
                  </NextLink>
                  <NextLink href="/login-facebook" passHref>
                    <Button
                      bg={'#045FE7'}
                      color="white"
                      variant="outline-text"
                      leftIcon={<ImFacebook color="white" />}
                      isFullWidth
                    >
                      Lanjutkan dengan Facebook
                    </Button>
                  </NextLink>
                </VStack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </MainLayout>
  );
};

// SignUpPage.getLayout = (page) => (
//   <LightMode>
//     <MainLayout>{page}
//     </MainLayout>
//   </LightMode>
// );

export default SignUpPage;
